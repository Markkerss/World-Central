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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">WorldCentral</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#"><Link to="/" style={{"color":"white"}}>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/favorites" style={{"color":"white"}}>Favorites</Link></a>
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
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
