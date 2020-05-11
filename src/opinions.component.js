import React from "react";

/*
inspired by https://reactjs.org/docs/faq-ajax.html
*/

export default class SKorDropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      acquiredData: null
    };
  }

  componentDidMount() {
    const init = {
      headers: {
        "X-Parse-Application-Id": process.env.REACT_APP_OPINIONS_APP_ID,
        "X-Parse-REST-API-Key": process.env.REACT_APP_OPINIONS_API_KEY
      }
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
            isLoaded: true,
            acquiredData: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (a separate .catch() instead of this will also catch errors inside the previous anon. function definition)
        error => {
          //promise rejeced
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, acquiredData } = this.state;
    if (error) {
      return (
        <main>
          <article>
            <h2>Visitor Opinions</h2>
            <div>Error: {error.message}</div>
          </article>
        </main>
      );
    } else if (!isLoaded) {
      return (
        <main>
          <article>
            <h2>Visitor Opinions</h2>
            <div>Loading...</div>
          </article>
        </main>
      );
    } else {
      return (
        <main>
          <article>
            <h2>Visitor Opinions</h2>
            {acquiredData.map(opinion => (
              <section key={opinion.objectId}>
                {/* For keys, see https://reactjs.org/tutorial/tutorial.html#picking-a-key */}
                <h3>{opinion.name} </h3>
                <p>{opinion.comment}</p>
                <p>
                  {opinion.willReturn
                    ? "I will return."
                    : "One visit was enough."}
                </p>
              </section>
            ))}
          </article>
        </main>
      );
    }
  }
}
