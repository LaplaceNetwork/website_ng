import React, { Component } from "react";

import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__logo">
          <img src="/img/logo.png" alt="logo" />
          <span>Laplace Network</span>
        </div>
        <ul className="Nav__menus">
          <li className="Nav__menu Nav__menu--actived">
            <span>拉普拉斯</span>
          </li>
          <li className="Nav__menu">
            <span>路线图</span>
          </li>
          <li className="Nav__menu">
            <span>LPT团队</span>
          </li>
          <li className="Nav__menu">
            <span>FAQ</span>
          </li>
          <li className="Nav__menu">
            <span>ENGLISH</span>
          </li>
        </ul>
      </nav>
    );
  }
}
