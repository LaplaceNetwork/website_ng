import React, { PureComponent } from "react";
import classNames from "classnames";
import "./Title.css";

export default class Title extends PureComponent {
  render() {
    const { text, className } = this.props;
    const rootCls = classNames({
      Title: true,
      [className]: className
    });
    return (
      <article className={rootCls}>
        <span className="Title__text">{text}</span>
        <hr className="Title__bottom__line" />
      </article>
    );
  }
}
