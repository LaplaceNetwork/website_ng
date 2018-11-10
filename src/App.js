import React, { Component } from "react";
import "./App.css";
import VideoBackground from "./components/VideoBackground";
import Nav from "./components/Nav";
import Introduce from "./modules/Introduce";
import RouteMap from "./modules/RouteMap";
import Team from "./modules/Team";
import Videos from "./modules/Videos";
import FAQs from "./modules/FAQs";
import Footer from "./modules/Footer";
import i18n from "./i18n";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "cn"
    };
  }
  render() {
    const { lang } = this.state;
    const { nav, introdution, routeMap, team, videos, faqs, footer } = i18n[
      lang
    ];
    console.log(this.state.lang);
    return (
      <div className="App">
        <VideoBackground />
        <Nav onChangeLang={this.onChangeLang} data={nav} lang={lang} />
        <Introduce data={introdution} lang={lang} />
        <RouteMap data={routeMap} lang={lang} />
        <Team data={team} lang={lang} />
        <Videos data={videos} lang={lang} />
        <FAQs data={faqs} lang={lang} />
        <Footer data={footer} lang={lang} />
      </div>
    );
  }
  onChangeLang = () => {
    const { lang } = this.state;
    this.setState({ lang: lang === "cn" ? "en" : "cn" });
  };
}

export default App;
