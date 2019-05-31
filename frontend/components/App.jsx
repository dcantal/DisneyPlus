import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';
import BrowseContainer from './browse/browse_container';
import MoviesShowContainer from './movies/movies_show/movies_show_container';

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        
        {/* <img id="logo" src={require("../../app/assets/images/disney_plus_logo.png")}></img> */}
        {/* <img src={require("../../app/assets/images/disney_plus_logo.png")}></img> */}
        {/* <h1>Disney Plus</h1> */}
        <Switch>
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpContainer} /> */}
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/browse" component={BrowseContainer} />
            <Route exact path="/movies/:movieId" component={MoviesShowContainer} />
        </Switch>
    </div>

);

export default App;