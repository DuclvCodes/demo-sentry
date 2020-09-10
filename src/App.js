import React, { Component } from "react";
import logo from "./logo.svg";
import Sentry from "./Sentry";
import ErrorExample from "./ErrorExample";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Sentry url="your_url_here">
        <div className="App">
          <ErrorExample />
        </div>
      </Sentry>
    );
  }
}

export default App;