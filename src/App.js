import React, { Component } from "react";

import CountStore from "./stores/CountStore";
import Count from "./components/Count";

class App extends Component {
  store = CountStore.create({ count: 0 });
  render() {
    return <Count store={this.store} />;
  }
}

export default App;
