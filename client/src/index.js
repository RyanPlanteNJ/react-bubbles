import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss"

const App = () => {
  return (
    <Router>
      <div className="App">
          <ul>
              <li>
                  <Link to = "/login">Login</Link>
                  <Link to = "/bubble-page">Bubble Pages</Link>
              </li>
          </ul>
          <Switch>
              <PrivateRoute exact path ="/bubble-page" component ={BubblePage} />>
              <Route path="/login" component={Login} />
              <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
);
