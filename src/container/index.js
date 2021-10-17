import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Activities from './activities';
import Form from './form';
import Home from './home';

const LandingPage = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/activities">
                    <Activities />
                </Route>
                <Route exact path="/form">
                    <Form />
                </Route>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default LandingPage;
