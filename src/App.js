import { Switch, Route, IndexRoute } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import HatsPage from "./pages/hats/hats.component";
import NotFoundPage from "./pages/not-found/not-found.component";

function App() {
    return (
        <div>
            <Header />

            <main className="site-main">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/hats" component={HatsPage} />
                    <Route path="/hats" component={HatsPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
