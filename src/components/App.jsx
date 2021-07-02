import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './Main'
import Home from './Home'

function App() {
    return (
   
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={()=> <Main/>}/>
                        <Route exact path='/currency' component={()=> <Home/>}/>
                        </Switch>
                </BrowserRouter>
    );
}
export default App;