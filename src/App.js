import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './app.style.scss';

import UserContext from './contexts/user/user-context';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-bandoring/error-boundary-component';
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'));

const SignInAndSignUp = lazy(() =>
	import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'),
);
const Checkout = lazy(() => import('./pages/checkoutpage/checkout-component'));

const App = () => {
	const [curranteUser, setcurranteUser] = useState({
		user: undefined,
	});
	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(
			async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);
					userRef.onSnapshot((snapShot) => {
						setcurranteUser({
							user: {
								id: snapShot.id,
								...snapShot.data(),
							},
						});
					});
				}
				setcurranteUser({ user: userAuth });
			},
		);
		unsubscribeFromAuth();
	}, []);
	// * this useEffect for work with redux  but you should call the useDispatch and the useSelector:
	// useEffect(()=>{
	//     const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
	//         if (userAuth){
	//             const userRef = await createUserProfileDocument(userAuth);
	//             userRef.onSnapshot(snapShot => {
	//                 dispatch(getUser({user: {
	//                     id:snapShot.id,
	//                     ...snapShot.data()
	//                 }}))
	//             })
	//         }
	//         dispatch(getUser({user:userAuth}))
	//     })
	//     unsubscribeFromAuth();
	// },[])
	return (
		<div className="App">
			<UserContext.Provider value={curranteUser.user}>
				<Header />
			</UserContext.Provider>
			<ErrorBoundary>
				<Suspense fallback={<div>...loading</div>}>
					<Routes>
						<Route path="/crwn-clothing" element={<HomePage />} />
						<Route
							path="/crwn-clothing/shop/*"
							element={<ShopPage />}
						/>
						<Route
							path="/crwn-clothing/sign-in"
							element={
								curranteUser.user ? (
									<Navigate to="/crwn-clothing" />
								) : (
									<SignInAndSignUp />
								)
							}
						/>
						<Route
							path="/crwn-clothing/checkout"
							element={<Checkout />}
						/>
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};
export default App;
