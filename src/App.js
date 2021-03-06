import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import HatsPage from "./pages/hats/hats.component";
import NotFoundPage from "./pages/not-found/not-found.component";

import { AppContext } from "./context/app-context";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App({ currentUser, setCurrentUser }) {
    useEffect(() => {
        // Source: https://www.titanwolf.org/Network/q/9c8d205b-9e6f-4c36-896c-9cf64954c7cb/y
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                // setIsLoggedIn(true);
                // setCurrentUser(user);
                console.log("Logged in: ", true);
                createUserProfileDocument(user);
            } else {
                // setIsLoggedIn(false);
                // setCurrentUser(null);
                console.log("Logged in: ", false);
            }
            setCurrentUser(user);
        });

        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/sign-in" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/hats" component={HatsPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Fragment>
    );
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
