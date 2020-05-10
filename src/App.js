import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome!</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/opinions">Visitor opinions</Link>
            </li>
            <li>
              <Link to="/addOpinion">Add your opinion</Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </Router>
  );
}

function Welcome() {
  return <h2>Welcome</h2>;
}

function Articles() {
  return <h2>Articles</h2>;
}

function Opinions() {
  return <h2>Opinions</h2>;
}

function AddOpinion() {
  return <h2>Add Opinion</h2>;
}
