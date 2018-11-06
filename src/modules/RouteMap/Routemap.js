import React, { Component } from "react";
import uniqid from "uniqid";
import "./RouteMap.css";
export default class Routemap extends Component {
  render() {
    const { title, routes } = this.props.data;
    return (
      <section className="RouteMap">
        <div className="RouteMap__bg">
          <img src="/img/route_map_bg.png" alt="route map background" />
        </div>

        <article className="RouteMap__title">
          {title}
          <hr />
        </article>
        <div className="RouteMap__q1">
          <label className="RouteMap__q1__desc">
            <span className="RouteMap__q1__desc__date">{routes[0].date}</span>
            <span className="RouteMap__q1__desc__content">
              {routes[0].content.map(c => (
                <span key={uniqid()}>{c}</span>
              ))}
            </span>
          </label>
          <img
            className="RouteMap__q1__icon"
            src={"/img/" + routes[0].icon}
            alt="Q1 icon"
          />
        </div>
        <div className="RouteMap__q2">
          <label className="RouteMap__q2__desc">
            <span className="RouteMap__q2__desc__date">{routes[1].date}</span>
            <span className="RouteMap__q2__desc__content">
              {routes[1].content.map(c => (
                <span key={uniqid()}>{c}</span>
              ))}
            </span>
          </label>
          <img
            className="RouteMap__q2__icon"
            src={"/img/" + routes[1].icon}
            alt="Q1 icon"
          />
        </div>
      </section>
    );
  }
}
