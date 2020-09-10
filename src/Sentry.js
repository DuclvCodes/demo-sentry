import React, { Component } from "react";

class Sentry extends Component {
  componentWillMount() {
    window && window.Raven && window.Raven.config(this.props.url).install();
  }

  componentDidCatch(error, errorInfo) {
    window && window.Raven && window.Raven.captureException(error, { extra: errorInfo });
  }

  render() {
    return this.props.children;
  }
}

export default Sentry;