import React from 'react';
import { Switch , Route  } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';



function App(props) {
return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
        </Switch>
        
    </div>
);
}

export default App;
