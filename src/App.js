import React, { useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDocument, firestore } from './firebase/firebase.utils';
import { useDispatch } from 'react-redux';

import './app.style.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkoutpage/checkout-component';

import { getUser } from './redux/slices/user-slice';


const App  = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    dispatch(getUser({user: {
                        id:snapShot.id,
                        ...snapShot.data()
                    }}))
                })
            }
            dispatch(getUser({user:userAuth}))
        })
        unsubscribeFromAuth();
    },[])
    return(
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/'  element={<HomePage />} />
                <Route path='/shop/*' element={<ShopPage />} />
                <Route path='/sign-in'  element={<SignInAndSignUp />} />
                <Route path='/checkout'  element={<Checkout />} />
            </Routes>
        </div>
    )
}
export default App;
