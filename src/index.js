import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//eslint-disable-next-line
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "/Users/SIDDHARTH/Desktop/REACT/counter-app/src/bootstrap.css";
import Counter from "./components/counter";
ReactDOM.render(<Counter />, document.getElementById("root"));

serviceWorker.register();
