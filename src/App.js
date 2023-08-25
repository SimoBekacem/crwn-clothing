import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './app.style.scss';

import UserContext from './contexts/user/user-context';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkoutpage/checkout-component';
const App = () => {
  const [curranteUser, setcurranteUser] = useState({
    user: undefined,
  });
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
    });
    unsubscribeFromAuth();
  }, []);
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
      <Routes>
        <Route path="/crwn-clothing" element={<HomePage />} />
        <Route path="/crwn-clothing/shop/*" element={<ShopPage />} />
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
        <Route path="/crwn-clothing/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};
export default App;
