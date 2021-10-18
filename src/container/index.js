import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import Activities from './activities';
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
                <Route exact path="/faq">
                    <FAQ />
                </Route>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default LandingPage;
