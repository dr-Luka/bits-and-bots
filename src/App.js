import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./components/landing";
import Browse from "./components/browse";

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
          </ul>
        </nav>
        <Switch>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
