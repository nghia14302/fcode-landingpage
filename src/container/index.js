import React, { useEffect } from 'react';

import AOS from 'aos';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';

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
    const step = JSON.parse(window.localStorage.getItem('step'));
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
                <Route exact path={step !== 2 ? '/' : '/form'}>
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
//Console log Title
console.clear();
console.log('$$$$$$$$\\       $$$$$$\\                  $$\\');
console.log('$$  _____|     $$  __$$\\                 $$ |');
console.log('$$ |           $$\\/  \\__| $$$$$$   $$$$$$$ | $$$$$$\\');
console.log('$$$$$\\ $$$$$$\\ $$ |      $$  __$$ $$  __$$ |$$  __$$\\');
console.log('$$  __|\\______|$$ |      $$ /  $$ |$$ /  $$ |$$$$$$$$ |');
console.log('$$ |           $$ |  $$\\ $$ |  $$ |$$ |  $$ |$$   ____|');
console.log('$$ |           \\$$$$$$  |\\$$$$$$  |\\$$$$$$$ |\\$$$$$$$\\');
console.log('\\__|            \\______/  \\______/  \\_______| \\_______|');

export default LandingPage;
