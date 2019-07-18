import * as React from "react";
import { Component } from "react";
import { returnStatement } from "@babel/types";

class Counter extends React.Component {
  state = {
    count: 0
    //imageURL: "https:/picsum.photos/200"
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <span
            style={{ fontSize: 10, fontWeight: "bold" }}
            className="badge badge-primary m-2" //CSS?!?
          >
            {" "}
            {this.formatCount()}
          </span>
          <button className="btn btn-secondary btn-sm"> Increment </button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state; //DESTRUCTOR
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
