import * as React from "react";
import { Component } from "react";
import { returnStatement } from "@babel/types";

class Counter extends React.Component {
    state = {
        count : 3
    };
  render() {
    return (
      <React.Fragment>
        <h1>{this.formatCount()}</h1>
        <button> Increment </button>
      </React.Fragment>
    );
  }


formatCount() {
    const { count } = this.state;
return count === 0 ? 'Zero' : count;
    }
}   
export default Counter;
