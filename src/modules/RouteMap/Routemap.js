import React, { Component } from "react";
import uniqid from "uniqid";
import "./RouteMap.css";
import Title from "../../components/Title";
export default class Routemap extends Component {
  render() {
    const { title, routes } = this.props.data;
    return (
      <section className="RouteMap" id="routeMap">
        <Title text={title} />
        <div className="RouteMap__r1">
          <label className="RouteMap__r1__desc">
            <span className="RouteMap__r1__desc__date">{routes[0].date}</span>
            <span className="RouteMap__r1__desc__content">
              {routes[0].content.map(c => (
                <span key={uniqid()}>{c}</span>
              ))}
            </span>
          </label>
          <img
            className="RouteMap__r1__icon"
            src={"/img/" + routes[0].icon}
            alt="Q1 icon"
          />
        </div>
        <div className="RouteMap__r2">
          <label className="RouteMap__r2__desc">
            <span className="RouteMap__r2__desc__date">{routes[1].date}</span>
            <span className="RouteMap__r2__desc__content">
              {routes[1].content.map(c => (
                <span key={uniqid()}>{c}</span>
              ))}
            </span>
          </label>
          <img
            className="RouteMap__r2__icon"
            src={"/img/" + routes[1].icon}
            alt="Q1 icon"
          />
        </div>
        <div className="RouteMap__r3">
          <img
            className="RouteMap__r3__icon"
            src={"/img/" + routes[2].icon}
            alt="Q1 icon"
          />
          <label className="RouteMap__r3__desc">
            <span className="RouteMap__r3__desc__date">{routes[2].date}</span>
            <span className="RouteMap__r3__desc__content">
              {routes[2].content.map(c => (
                <span key={uniqid()}>{c}</span>
              ))}
            </span>
          </label>
        </div>
        <div className="RouteMap__r4">
          <img
            className="RouteMap__r4__icon"
            src={"/img/" + routes[3].icon}
            alt="Q1 icon"
          />
          <label className="RouteMap__r4__desc">
            <span className="RouteMap__r4__desc__date">{routes[3].date}</span>
            <span className="RouteMap__r4__desc__content">
              {routes[3].content.map(c => (
                <span key={uniqid()}>{c}</span>
              ))}
            </span>
          </label>
        </div>
        <div className="RouteMap__r5">
          <img
            className="RouteMap__r5__icon"
            src={"/img/" + routes[4].icon}
            alt="Q1 icon"
          />
          <label className="RouteMap__r5__desc">
            <span className="RouteMap__r5__desc__date">{routes[4].date}</span>
            <span className="RouteMap__r5__desc__content">
              {routes[4].content.map(c => (
                <span key={uniqid()}>{c}</span>
              ))}
            </span>
          </label>
        </div>
      </section>
    );
  }
}
