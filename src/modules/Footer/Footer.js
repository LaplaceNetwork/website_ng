import React, { Component } from "react";
import uniqid from "uniqid";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    const { desc, qrcode, links } = this.props.data;
    return (
      <div className="Footer">
        <div className="Footer__inner">
          <p className="Footer__desc">{desc}</p>
          <div className="Footer__qrcode">
            <img src={"/img/" + qrcode} alt="qrcode" />
          </div>
          <hr className="Footer__splitter" />
          <ul className="Footer__links">
            {links.map(link => {
              return (
                <li key={uniqid()} className="Footer__link">
                  <a target="_blank" rel="noopener noreferrer" href={link.href}>
                    <img src={link.icon} alt="link" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="Footer__copyright">
            support@laplace.network | Copyright 2018 © LPT | Privacy policy
          </p>
        </div>
      </div>
    );
  }
}
