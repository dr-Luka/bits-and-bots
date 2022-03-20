import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./components/landing/Landing.js";
import Browse from "./components/browse/Browse.js";
import Details from "./components/details/Details.js";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart.js";

import { CartProvider } from "./contexts/CartContext.js";

export default function App() {
  return (
    <Router>
      <div>
        <CartProvider>
          <Switch>
            <Route path="/browse">
              <Browse />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
}
