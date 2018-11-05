import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Introduce from "./modules/Introduce";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Introduce />
      </div>
    );
  }
}

export default App;
