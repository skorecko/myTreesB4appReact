/*
Single-page React app with client-side routing and back4ap backend.
Stefan Korecko, 2020

partially inspired by 
https://reactjs.org/docs/faq-ajax.html
https://reactjs.org/docs/forms.html
https://bezkoder.com/react-crud-web-api/
*/

import React from "react";

/*
This is a class component. Here we need a class, 
inherited from React.Component, because 
we need to define and handle state of the component.
Read more at:
https://reactjs.org/docs/components-and-props.html

*/
export default class SKorDropdownMenu extends React.Component {
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
          className="btDropdownMenu"
          onClick={() => {
            return this.handleClick();
          }}
        >
          Menu
        </button>
        {this.state.shouldBeSeen ? this.props.children : null}
      </div>
    );
  }
  /*
  Above, we used  an arrow function in the callback to assign the handleClick()
  method to the click event of the button. This means that the method is re-assigned every time the
  component is rendered. Here it is OK, but it may cause problems in some more
  complex situations. 
  An alternate approach is to bind in the constructor (we use it in add-opinion.component.js)
  or to use the class fields syntax
  Read more at https://reactjs.org/docs/handling-events.html 
   */

  /*
    from https://reactjs.org/docs/react-component.html#componentdidmount:
    componentDidMount() is invoked immediately after a component is mounted 
    (inserted into the tree). Initialization that requires DOM nodes 
    should go here. If you need to load data from a remote endpoint, 
    this is a good place to instantiate the network request.

    Learn more about the React component lifecycle at
    https://reactjs.org/docs/react-component.html#the-component-lifecycle
    or look on the diagram
    http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  */
  componentDidMount() {
    document.addEventListener("click", event => {
      if (!event.target.classList.contains("btDropdownMenu")) {
        if (this.state.shouldBeSeen) {
          this.setState({ shouldBeSeen: false });
        }
      }
    });
  }

  handleClick() {
    this.setState({ shouldBeSeen: !this.state.shouldBeSeen });
  }
}
