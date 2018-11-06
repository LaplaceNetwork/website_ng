import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Introduce from "./modules/Introduce";
import Architecture from "./modules/Architecture";
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
    const { nav, introdution, architecture, routeMap, team, videos } = i18n[
      this.state.lang
    ];
    return (
      <div className="App">
        <Nav onChangeLang={this.onChangeLang} data={nav} />
        <Introduce data={introdution} />
        <Architecture data={architecture} />
        <RouteMap data={routeMap} />
        <Team data={team} />
        <Videos data={videos} />
        <FAQs data={videos} />
        <Footer data={videos} />
      </div>
    );
  }
  onChangeLang = lang => {
    this.setState({ lang });
  };
}

export default App;
