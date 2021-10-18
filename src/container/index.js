import React, { useEffect } from 'react';

import AOS from 'aos';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import Activities from './activities';
import Form from './form';
import Home from './home';
import Register from './register';

AOS.init({
    // Global settings:
    disable: false,
    debounceDelay: 50, // the delay when resize windows
    throttleDelay: 0, // the delay when scrolling

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // the trigger point (px)
    delay: 0,
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'eas',
    once: false, // render one time or not
    mirror: false, // is animate out when scrolling past them
    anchorPlacement: 'top-bottom', // Which position that the element should be triggered
});

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
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
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/form">
                    <Form />
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
