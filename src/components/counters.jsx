import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {};
  render() {
      // MULTIPLE COUNTER CLASS ISOLATED FROM EACH OTHER
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;
