import React, { PureComponent } from "react";
import "./Title.css";

export default class Title extends PureComponent {
  render() {
    const { text } = this.props;
    return (
      <article className="Title">
        <span className="Title__text">{text}</span>
        <hr className="Title__bottom__line" />
      </article>
    );
  }
}
