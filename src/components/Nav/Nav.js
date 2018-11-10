import React, { Component } from "react";
import uniqid from "uniqid";
import classNames from "classnames";
import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actived: 0,
      lang: ""
    };
    this.ids = ["#introduction", "#routeMap", "#team", "#faq"];
  }
  render() {
    const me = this;
    const ids = this.ids;
    const { actived } = this.state;
    return (
      <nav className="Nav">
        <div className="Nav__logo">
          <img src="/img/logo.png" alt="logo" />
          <span>Laplace Network</span>
        </div>
        <ul className="Nav__menus">
          {me.props.data.map((menu, i) => {
            const cls = classNames({
              Nav__menu: true,
              "Nav__menu--actived": actived === i
            });
            return (
              <li key={uniqid()} className={cls}>
                <a href={ids[i]} data-index={i} onClick={me.onClickMenu}>
                  <span>{menu}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
  onClickMenu = e => {
    const index = +e.currentTarget.dataset.index;

    if (this.props.data.length - 1 === index) {
      this.setState({ actived: 0 });
      this.props.onChangeLang();
    } else {
      this.setState({ actived: index });
    }
  };
}
