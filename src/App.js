import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <header>
        <h1>My Blog about Trees and Other Things</h1>
        <MyDropdownMenu>
          <nav>
            <Link to="/">Welcome!</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/opinions">Visitor opinions</Link>
            <Link to="/addOpinion">Add your opinion</Link>
          </nav>
        </MyDropdownMenu>
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

function Welcome() {
  return (
    <main>
      <article>
        <h2>Welcome!</h2>

        <p>
          Welcome to my page. My name is <b>Ján ŠK. Trieska</b>. I live in{" "}
          <i>Woodly Woodens</i>. I am a <i>woodcutter</i>. I love trees and I
          would like to tell you something about my most favourite ones.
        </p>
      </article>
    </main>
  );
}

function Articles() {
  return (
    <main>
      <article>
        <h2>Pine</h2>
        <figure>
          <img
            src="./fig/pineBw.png"
            height="150"
            title="fig.pine"
            alt="pine"
          />
        </figure>

        <p>Pine is a softwood coniferous tree.</p>

        <dl>
          <dt>Latin name:</dt>
          <dd>Pinus</dd>
          <dt>Division:</dt>
          <dd>Pinophyta</dd>
          <dt>Class:</dt>
          <dd>Pinopsida</dd>
        </dl>
      </article>
      <article>
        <h2>Oak</h2>
        <figure>
          <img src="./fig/oak.png" height="150" title="fig.oak" alt="oak" />
        </figure>
        <p>
          Oak is a deciduous tree with hardwood. It lives long and grows slowly.
          Its leaves are simple, lobate and fall off before the winter.
        </p>
      </article>
    </main>
  );
}

function Opinions() {
  return <h2>Opinions</h2>;
}

function AddOpinion() {
  return <h2>Add Opinion</h2>;
}

class MyDropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldBeSeen: false
    };
  }

  render() {
    return (
      <div>
        <button
          class="btDropdownMenu"
          onClick={event => {
            return this.handleClick(event);
          }}
        >
          Menu
        </button>
        {this.state.shouldBeSeen ? this.props.children : null}
      </div>
    );
  }

  /*
    from https://reactjs.org/docs/react-component.html#componentdidmount:
    componentDidMount() is invoked immediately after a component is mounted 
    (inserted into the tree). Initialization that requires DOM nodes 
    should go here. If you need to load data from a remote endpoint, 
    this is a good place to instantiate the network request.
  */
  componentDidMount() {
    document.addEventListener("click", event => {
      console.log(event.target.classList);
      if (!event.target.classList.contains("btDropdownMenu")) {
        if (this.state.shouldBeSeen) {
          this.setState({ shouldBeSeen: false });
        }
      }
    });
  }

  handleClick(event) {
    this.setState({ shouldBeSeen: !this.state.shouldBeSeen });
  }
}
