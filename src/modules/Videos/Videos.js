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
      videoSrc: ""
    };
  }
  componentDidMount = () => {
    console.log(this.playerBg);
  };

  render() {
    const { title } = this.props.data;
    const { videos, video, isPlaying, videoSrc } = this.state;
    const mainCls = classNames({
      Videos: true,
      "Videos--hidden": isPlaying
    });
    const playerCls = classNames({
      player: true,
      "player--playing": isPlaying
    });
    return (
      <div style={{ width: "100%", position: "relative" }}>
        <section className={mainCls}>
          <Title text={title} />
          <ul className="Videos__list">
            {videos.map((video, i) => {
              return (
                <li
                  className="Videos__list__item"
                  data-index={i}
                  key={uniqid()}
                  onClick={this.onChangeVideo}
                >
                  <img src={video.img} alt={video.img} />
                </li>
              );
            })}
          </ul>
          <div className="Videos__player" ref={el => (this.playerBg = el)}>
            <img
              className="Videos__player__bg"
              src={video.img}
              alt="video screenshot"
            />
            <img
              className="Videos__player__btn"
              src="/img/play.png"
              alt="player button"
              data-name={video.src}
              onClick={this.onPlay}
            />
          </div>
        </section>
        <section className={playerCls}>
          <span className="player__closer" onClick={this.onClose}>
            Close
          </span>
          <video width="50%" src={videoSrc} autoPlay controls="controls">
            您的浏览器不支持video标签
          </video>
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
