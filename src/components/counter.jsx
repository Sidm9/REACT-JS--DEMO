import * as React from "react";
import { Component } from "react";
import { returnStatement } from "@babel/types";

class Counter extends React.Component {
  state = {
    count: 5
    //imageURL: "https:/picsum.photos/200"
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <span
            className={this.getBadgeClasses()}
            style={{ fontSize: 10, fontWeight: "bold" }}
          >
            {this.formatCount()}
          </span>

          <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //HERE M-2 IS FOR MARGIN AND BADGE IS SOME CSS ...SORT OF
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
    /* CONDITIONAL EXPRESSION TO CHECK IF THE 
    /*VALUE IS ZERO THEN WARNING  (THIS WILL CHANGE COLOUR TO YELLOW ELSE BLUE)   */
  }

  formatCount() {
    const { count } = this.state; //DESTRUCTOR
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
