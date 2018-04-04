import ReactGA from "react-ga";
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize("UA-80655492-2");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="bg" />
        <div id="overlay" />
        <div id="main">
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
