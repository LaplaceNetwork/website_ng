import React, { Component } from "react";
import "./VideoBackground.css";

export default class VideoBackground extends Component {
  render() {
    return (
      <div className="VideoBackground">
        <video
          // width="100%"
          height="1300"
          alt="auto play background video"
          autoPlay
          muted
          loop
        >
          <source src="/video/bg.mp4" type="video/mp4" />
        </video>
        {/* <div className="VideoBackground__cover" /> */}
      </div>
    );
  }
}
