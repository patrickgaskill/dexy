import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { whyDidYouUpdate } from "why-did-you-update";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV !== "production") {
  whyDidYouUpdate(React);
}
