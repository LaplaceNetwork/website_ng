import React, { Component } from "react";
import uniqid from "uniqid";

function Item(props) {
  return (
    <ul>
      {props.data.map(d => {
        return <li key={uniqid()}>{d}</li>;
      })}
    </ul>
  );
}

export default class Architecture extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(item => {
          return <Item key={uniqid()} data={item} />;
        })}
      </div>
    );
  }
}
