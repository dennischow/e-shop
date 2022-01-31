import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import HatsPage from "./pages/hats/hats.component";
import NotFoundPage from "./pages/not-found/not-found.component";

import { AppContext } from "./context/app-context";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Source: https://www.titanwolf.org/Network/q/9c8d205b-9e6f-4c36-896c-9cf64954c7cb/y
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setIsLoggedIn(true);
                console.log("Logged in: ", true);
                createUserProfileDocument(user);
            } else {
                setIsLoggedIn(false);
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
            <AppContext.Provider value={{ isLoggedIn, currentUser }}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/sign-in" component={SignInAndSignUp} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/hats" component={HatsPage} />
                    <Route path="/hats" component={HatsPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </AppContext.Provider>
        </Fragment>
    );
}

export default App;
