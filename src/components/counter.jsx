import * as React from "react";
import { Component } from "react";
import { returnStatement } from "@babel/types";

class Counter extends React.Component {
  state = {
    count: 5,
    tag: []
    //imageURL: "https:/picsum.photos/200"
  };

  renderTags() {
    if (this.state.tag.length === 0) return <p>THERE ARE NO TAGS</p>;
    return (
      <ul>
        <li>
          {this.state.tag.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </li>
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }
}
export default Counter;
