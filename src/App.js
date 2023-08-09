import React, { Component, useEffect } from 'react';
import { Switch , Route  } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/sign-in' component={SignInAndSignUp} />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </div>
    )
}
export default App;
