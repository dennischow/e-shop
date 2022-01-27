import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import HatsPage from "./pages/hats/hats.component";
import NotFoundPage from "./pages/not-found/not-found.component";

function App() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/sign-in" component={SignInAndSignUp} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/hats" component={HatsPage} />
                <Route path="/hats" component={HatsPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Fragment>
    );
}

export default App;
