import React, { Component } from "react";
import uniqid from "uniqid";
import "./Team.css";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: props.data[0]
    };
  }
  render() {
    const data = this.props.data;
    const { member } = this.state;
    return (
      <div className="Team">
        <ul className="Team__members">
          {data.map((_member, i) => {
            let cls = "Team__member__avatar";
            _member === member && (cls += " Team__member__avatar--actived");
            console.log(cls);
            return (
              <li
                data-index={i}
                onClick={this.onChangeDesc}
                className={cls}
                key={uniqid()}
                style={{
                  background:
                    "url('/img/" + _member.avatar + "') no-repeat center",
                  backgroundSize: "133%"
                }}
              />
            );
          })}
        </ul>
        <section className="Team__member">
          <article className="Team__member__name">{member.name}</article>
          <p className="Team__member_title">
            <span>{member.title}</span>
            <img src={"/img/social-linkedin.png"} alt="linkedin account" />
          </p>
          <hr className="Team__member_splitter" />
          <p className="Team__member_desc">{member.desc}</p>
        </section>
      </div>
    );
  }
  onChangeDesc = e => {
    const index = +e.currentTarget.dataset.index;
    console.log(index);
    this.setState({ member: this.props.data[index] });
  };
}
