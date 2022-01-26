import { Route } from 'react-router';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HatsPage from './pages/hats/hats.component';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
