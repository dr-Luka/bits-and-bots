import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./components/landing/Landing.js";
import Browse from "./components/browse/Browse.js";
import Details from "./components/details/Details";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
