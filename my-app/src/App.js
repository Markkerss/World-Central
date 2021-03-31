import './App.css'
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import CountryDetailsByName from './pages/CountryDetailsByName'
// import {
//   Home,
//   CountryDetailsByName
// } from './pages';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/country/:name">Details</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/country/:name">
            <CountryDetailsByName />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
