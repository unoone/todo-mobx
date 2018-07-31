import React, { Component } from "react";
// import Count from "../stores/count";
import { observer } from "mobx-react";

export default observer(
  class Count extends Component {
    render() {
      return (
        <div>
          <h1>Count: {this.props.store.computedCount}</h1>
          <button onClick={() => this.props.store.increment()} />
        </div>
      );
    }
  }
);
