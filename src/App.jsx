import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "header/Header";

const App = () => (
  <div>
    <Header />
    <div>I'm the consumer app</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
