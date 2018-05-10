import ReactDOM from "react-dom";
import React from "react";
import {App} from "./app";

/**
 * render application
 */
const render = App => {
  const app = document.getElementById("app");
  if (app) {
    // render
    ReactDOM.render(<App/>, app);
  }
};

// render app
render(App);

// enable hot reload ;)
(window === window.top) && module.hot && module.hot.accept('./app', () => render(require('./app').App));
