import React, { Component } from "react";
import uniqid from "uniqid";
import "./Team.css";
import Title from "../../components/Title";
export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adjustMembers: [],
      member: props.data.members[0]
    };
  }
  componentDidMount = () => {
    const vWidth = document.body.getClientRects()[0].width;
    const width = this.mc.getClientRects()[0].width;
    if (vWidth <= 768) {
      const numPerLine = Math.floor(width / 80);
      let restItems = this.props.data.members.length % numPerLine;
      console.log(restItems);
      if (restItems !== 0) {
        let adjustCount = numPerLine - restItems;
        let adjustMembers = [];
        while (adjustCount !== 0) {
          adjustMembers.push(1);
          adjustCount--;
        }

        this.setState({ adjustMembers });
      }
    }
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.data !== nextProps.data) {
      this.setState({ member: nextProps.data.members[0] });
    }
  };

  render() {
    const { title, members } = this.props.data;
    const { member, adjustMembers } = this.state;
    return (
      <div className="Team" id="team">
        <Title text={title} />
        <div className="Team__inner">
          <ul className="Team__members" ref={el => (this.mc = el)}>
            {members.map((_member, i) => {
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
            {adjustMembers.map(() => {
              return <li key={uniqid()} className="Team__member__avatar" />;
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
      </div>
    );
  }
  onChangeDesc = e => {
    const index = +e.currentTarget.dataset.index;
    console.log(index);
    this.setState({ member: this.props.data.members[index] });
  };
}
