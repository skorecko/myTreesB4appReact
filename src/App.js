import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Unfortunately, import everything from a module is possible only under some name.
//import * as htmlComponents from "./components/html-components.js";
//then we will use <htmlComponents.Articles /> instead of <Articles /> etc.
//Alternatively, we have to name all imported items:
//import {Welcome, Articles, Opinions, AddOpinion} from "./components/html-components.js";
//But in this case it is easy to exclude the ones we do not want to import:
import { Welcome, Articles, AddOpinion } from "./components/html-components.js";

import Opinions from "./components/opinions.component.js";

import SKorDropdownMenu from "./components/skor-dropdown-menu.component.js";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <header>
        <h1>My Blog about Trees and Other Things</h1>
        <SKorDropdownMenu>
          <nav>
            <Link to="/">Welcome!</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/opinions">Visitor opinions</Link>
            <Link to="/addOpinion">Add your opinion</Link>
          </nav>
        </SKorDropdownMenu>
      </header>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/opinions">
          <Opinions />
        </Route>
        <Route path="/addOpinion">
          <AddOpinion />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}
