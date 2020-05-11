/*
Single-page React app with client-side routing and back4ap backend.
Stefan Korecko, 2020

partially inspired by 
https://reactjs.org/docs/faq-ajax.html
https://reactjs.org/docs/forms.html
https://bezkoder.com/react-crud-web-api/
*/

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Unfortunately, import everything from a module is possible only under some name.
//import * as htmlComponents from "./components/html-components.js";
//then we will use <htmlComponents.Articles /> instead of <Articles /> etc.
//Alternatively, we have to name all imported items:
//import {Welcome, Articles, Opinions, AddOpinion} from "./components/html-components.js";
//But in this case it is easy to exclude the ones we do not want to import:
import { Welcome, Articles } from "./components/html-components.js";

import Opinions from "./components/opinions.component.js";
import AddOpinion from "./components/add-opinion.component.js";

import SKorDropdownMenu from "./components/skor-dropdown-menu.component.js";

import "./styles.css";

/*
The syntax used inside of the return command below and 
on other places in this application is 
JSX (JavaScript XML), which allows to mix
HTML with JavaScript expressions.
However, it is more than a templating language, because it also allows, 
for example, to instantiate and compose React components 
(i.e. objects of classes inheriting from React.Component) 
in an HTML-like way.

Read more at
https://reactjs.org/docs/introducing-jsx.html
and
https://reactjs.org/docs/jsx-in-depth.html
*/
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
