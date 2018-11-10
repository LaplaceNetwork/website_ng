import React, { Component } from "react";
import uniqid from "uniqid";
import classNames from "classnames";
import "./FAQs.css";

import Title from "../../components/Title";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: props.isOpened
    };
  }
  render() {
    const { q, a } = this.props.data;
    const { isOpened } = this.state;
    const stateIconSrc = "/img/" + (isOpened ? "down.png" : "up.png");
    const rootCls = classNames({
      FAQ: true,
      "FAQ--isOpened": isOpened
    });
    return (
      <div className={rootCls} onClick={this.toggleState} id="faq">
        <div className="FAQ__question">
          <img className="FAQ__state_icon" src={stateIconSrc} alt="faq state" />
          <span>{q}</span>
        </div>
        <div className="FAQ__answer">
          {a.map(answer => {
            return <p key={uniqid()}>{answer}</p>;
          })}
        </div>
      </div>
    );
  }
  toggleState = () => {
    let { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  };
}

export default class FAQs extends Component {
  render() {
    const { title, list } = this.props.data;
    return (
      <section className="FAQs">
        <Title text={title} />
        {list.map((faq, i) => {
          return <FAQ data={faq} key={uniqid()} isOpened={i === 0} />;
        })}
      </section>
    );
  }
}
