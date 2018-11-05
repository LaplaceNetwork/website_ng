import React, { Component } from "react";
import "./Introduce.css";

export default class Introduce extends Component {
  render() {
    return (
      <section className="Introduce">
        <div className="Introduce__title">
          <img
            src="/img/logo.png"
            alt="introduce icon"
            className="Introduce__title__icon"
          />
          <div className="Introduce__title__content">
            <h1>拉普拉斯网络</h1>
            <h3>去中心化数据交换协议群</h3>
          </div>
        </div>
        <div className="Introduce__desc">
          <span>
            拉普拉斯网络简称LPT，是一套基于区块链去中心化概念数据交换协议群，支持数据的发现，授权与交易。
          </span>
        </div>
        <div className="Introduce__whitepaper">
          <span>白皮书</span>
          <img src="/img/whitepaper.png" alt="white paper" />
        </div>
        <hr className="Introduce__splitline" />
        <div className="Introduce__video__btn">
          <span>观看视频</span>
          <img src="/img/play.png" alt="video icon" />
        </div>
        <div className="Introduce__video__bg">
          <video />
        </div>
        <div className="Introduce__video__player">
          <video />
        </div>
      </section>
    );
  }
}
