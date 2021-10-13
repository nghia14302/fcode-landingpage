import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Activities from './activities';
import Home from './home';

const LandingPage = () => {
    return (
        <Switch>
            <Route path="/activities">
                <Activities />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default LandingPage;
