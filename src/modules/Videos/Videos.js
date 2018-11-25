import React, { Component } from "react";
import uniqid from "uniqid";
import classNames from "classnames";
import "./Videos.css";
import Title from "../../components/Title";
export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.data.list,
      video: props.data.list[1],
      isPlaying: false,
      videoSrc: "",
      isSmallScreen: true
    };
  }
  componentDidMount = () => {
    const vWidth = document.body.getClientRects()[0].width;
    if (vWidth > 1440) {
      this.setState({ isSmallScreen: false });
    }
  };

  render() {
    const { title } = this.props.data;
    const { lang } = this.props;
    const { videos, video, isPlaying, videoSrc, isSmallScreen } = this.state;
    const mainCls = classNames({
      Videos: true,
      "Videos--hidden": isPlaying
    });
    const playerCls = classNames({
      Videos__Demo__Player: true,
      "--playing": isPlaying
    });
    const rootCls = classNames({
      ["--lang-" + lang]: lang
    });
    return (
      <div style={{ width: "100%", position: "relative" }} className={rootCls}>
        <section className={mainCls}>
          <Title text={title} className="Videos__Title" />
          <div className="Video__List_Container">
            <ul className="Videos__list">
              {videos.map((video, i) => {
                const imgSrc =
                  (isSmallScreen ? video.img + "_sm" : video.img) + ".png";
                return (
                  <li
                    className="Videos__list__item"
                    data-index={i}
                    key={uniqid()}
                    onClick={this.onChangeVideo}
                  >
                    <img src={imgSrc} alt="Demo video" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="Videos__Demo" ref={el => (this.playerBg = el)}>
            <img
              className="Videos__Demo__bg"
              src={(isSmallScreen ? video.img + "_sm" : video.img) + ".png"}
              alt="video screenshot"
            />
            <img
              className="Videos__Demo__btn"
              src="/img/play.png"
              alt="player button"
              data-name={video.src}
              onClick={this.onPlay}
            />
          </div>
        </section>
        <section className={playerCls}>
          <div className="Videos__Player__Container">
            <span
              className="Videos__Demo__Player__Closer"
              onClick={this.onClose}
            >
              Close
            </span>
            {videoSrc && (
              <video
                src={videoSrc}
                autoPlay
                controls="controls"
                className="Videos__DemoVideo"
              >
                您的浏览器不支持video标签
              </video>
            )}
          </div>
        </section>
      </div>
    );
  }
  onChangeVideo = e => {
    const index = +e.currentTarget.dataset.index;
    let videos = this.state.videos;
    let newVideos = videos.slice();
    const video = videos[index];
    newVideos.splice(index, 1);
    newVideos.push(video);
    this.setState({ video, videos: newVideos });
  };
  onPlay = () => {
    this.setState({ isPlaying: true, videoSrc: this.state.video.src });
  };
  onClose = () => {
    this.setState({ isPlaying: false, videoSrc: "" });
  };
}
