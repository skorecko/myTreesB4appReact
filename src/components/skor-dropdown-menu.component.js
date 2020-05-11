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
