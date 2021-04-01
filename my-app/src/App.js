import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import CountryDetailsByName from './pages/CountryDetailsByName'
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">WorldCentral</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/" style={{"color":"white"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites" style={{"color":"white"}}>Favorites</Link>
              </li> 
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/country/:name">
            <CountryDetailsByName />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
