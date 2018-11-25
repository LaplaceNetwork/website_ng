import React, { Component } from "react";
import classNames from "classnames";
import "./Introduce.css";
import Architecture from "../Architecture";
export default class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      bg_video_src: "",
      vWidth: 0,
      vHeight: 0
    };
  }
  componentDidMount = () => {
    const { width, height } = document.body.getClientRects()[0];
    this.setState({ vWidth: `${width - 5}px`, vHeight: `${height - 10}px` });
  };

  render() {
    const {
      title,
      subtitle,
      desc,
      architecture,
      whitepaper,
      wpName,
      wmName
    } = this.props.data;
    const { lang } = this.props;
    const rootCls = classNames({
      Introduce: true,
      ["--lang-" + lang]: lang
    });
    const { isPlaying, bg_video_src, vWidth } = this.state;
    const playerCls = classNames({
      Introduce__video__player: true,
      "Introduce__video__player--isPlaying": isPlaying
    });
    return (
      <section className={rootCls} id="introduction">
        <div className="Introduce__title">
          <img
            src="/img/logo.png"
            alt="introduce icon"
            className="Introduce__title__icon"
          />
          <div className="Introduce__title__content">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </div>
        </div>
        <div className="Introduce__desc">
          <span>{desc}</span>
        </div>
        <div className="Introduce__whitepaper">
          <a
            href={"/file/" + whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{wpName}</span>
            <img src="/img/whitepaper.png" alt="white paper" />
          </a>
        </div>
        <hr className="Introduce__splitline" />
        <div className="Introduce__video__btn" onClick={this.onPlay}>
          <span>{wmName}</span>
          <img src="/img/play.png" alt="video icon" />
        </div>
        <div className={playerCls}>
          <span
            className="Introduce__video__player_closer"
            onClick={this.onClose}
          >
            close
          </span>
          <video
            width={vWidth}
            // height={vHeight}
            src={"/video/" + bg_video_src}
            autoPlay
            controls="controls"
          >
            Your browser don't support the video
          </video>
        </div>
        <Architecture data={architecture} />
      </section>
    );
  }
  onPlay = () => {
    this.setState({ isPlaying: true, bg_video_src: this.props.data.video });
  };
  onClose = () => {
    this.setState({ isPlaying: false, bg_video_src: "" });
  };
}
