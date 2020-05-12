/*
Single-page React app with client-side routing and back4ap backend.
Stefan Korecko, 2020

partially inspired by 
https://reactjs.org/docs/faq-ajax.html
https://reactjs.org/docs/forms.html
https://bezkoder.com/react-crud-web-api/
*/

import React from "react";
import { Link } from "react-router-dom";

export default class AddOpinion extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTryAgain = this.handleTryAgain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    /*
    Above,  we bound the methods (functions) to this object
    using Function.prototype.bind(). In fact, we created new functions 
    (with the same names), which values of this are set to this object.
    
    Read more at 
    https://reactjs.org/docs/handling-events.html
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind 
    */
  }

  get initState() {
    return {
      name: "",
      comment: "",
      willReturn: false,

      error: null,
      submitted: false,
      answer: null
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "willReturn" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleTryAgain() {
    this.setState(this.initState);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newOpinion = {
      name: this.state.name.trim(),
      comment: this.state.comment.trim(),
      willReturn: this.state.willReturn
    };

    if (newOpinion.name === "" || newOpinion.comment === "") {
      this.setState({
        error: new Error(
          "Name and (or) opinion should not consist of whitespaces only."
        )
      });
      return;
    }

    const init = {
      headers: {
        "X-Parse-Application-Id": process.env.REACT_APP_OPINIONS_APP_ID,
        "X-Parse-REST-API-Key": process.env.REACT_APP_OPINIONS_API_KEY
      },
      method: "POST",
      body: JSON.stringify(newOpinion)
    };

    fetch(process.env.REACT_APP_OPINIONS_URL, init)
      .then(response => {
        if (response.ok) {
          //successful execution includes an error response from the server. So we have to check the return status of the response here.
          return response.json(); //we return a new promise with  the response data in JSON to be processed
        } else {
          //if we get server error
          return Promise.reject(
            new Error(
              `Server answered with ${response.status}: ${response.statusText}.`
            )
          ); //we return a rejected promise to be catched later
        }
      })
      .then(
        result => {
          //promise fullfiled
          this.setState({
            submitted: true,
            answer: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (a separate .catch() instead of this will also catch errors inside the previous anon. function)
        error => {
          //promise rejeced
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { error, submitted } = this.state;
    if (error) {
      return (
        <main>
          <article>
            <h2>Add Opinion</h2>
            <p>Your opinion has not been saved.</p>
            <p>Error: {error.message}</p>
            <button onClick={this.handleTryAgain}>Try again</button>
          </article>
        </main>
      );
    } else if (!submitted) {
      return (
        <main>
          <article>
            <h2>Your Opinion</h2>
            <p>
              Please, use the form below to state your opinion about this page.
            </p>
            <form id="opnFrm" onSubmit={this.handleSubmit}>
              <label htmlFor="nameElm">Your name:</label>
              <input
                type="text"
                name="name"
                id="nameElm"
                value={this.state.name}
                size="20"
                maxLength="50"
                placeholder="Enter your name here"
                required
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <label htmlFor="opnElm">Your opinion:</label>
              <textarea
                name="comment"
                id="opnElm"
                value={this.state.comment}
                cols="50"
                rows="3"
                placeholder="Express your opinion here"
                required
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <input
                type="checkbox"
                name="willReturn"
                id="willReturnElm"
                checked={this.state.willReturn}
                onChange={this.handleInputChange}
              />
              <label htmlFor="willReturnElm">
                I will definitely return to this page.
              </label>
              <br />
              <br />
              <button type="submit">Send</button>
            </form>
          </article>
        </main>
      );
    } else {
      return (
        <main>
          <article>
            <h2>Add Opinion</h2>
            <p>Your opinion has been saved succesfully.</p>
            <p>
              <Link to="/opinions">Click here</Link> to see the user opinions.
            </p>
          </article>
        </main>
      );
    }
  }
}
