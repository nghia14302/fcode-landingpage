import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Activities from './activities';
import Home from './home';

const LandingPage = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/activities">
                <Activities />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};

export default LandingPage;
