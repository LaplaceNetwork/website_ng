import React, { Component } from "react";
import uniqid from "uniqid";
import "./Architecture.css";

function Item(props) {
  return (
    <section className="Architecture__item">
      <article className="Architecture__item__title">{props.title}</article>
      <hr className="Architecture__item__split__line" />
      <ul className="Architecture__item__container">
        {props.data.map(item => {
          return (
            <li key={uniqid()} className="Architecture__item__content">
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default class Architecture extends Component {
  render() {
    return (
      <div className="Architecture">
        {this.props.data.map(d => {
          return <Item key={uniqid()} title={d.title} data={d.items} />;
        })}
      </div>
    );
  }
}
