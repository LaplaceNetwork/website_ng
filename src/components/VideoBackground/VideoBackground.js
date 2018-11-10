import React, { Component } from "react";
import "./VideoBackground.css";

export default class VideoBackground extends Component {
  render() {
    return (
      <div className="VideoBackground">
        <video
          // width="100%"
          height="1300"
          src="/video/bg.mp4"
          alt="auto play background video"
          autoPlay
          muted
          loop
        />
        {/* <div className="VideoBackground__cover" /> */}
      </div>
    );
  }
}
