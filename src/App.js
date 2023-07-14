import React from 'react';
import { Switch , Route  } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hatspage.component';



function App(props) {
return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
        
    </div>
);
}

export default App;
