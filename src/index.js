import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "/Users/SIDDHARTH/Desktop/JS/counter-app/src/bootstrap.css";
import Counter from "./components/counter";
ReactDOM.render(<Counter />, document.getElementById("root"));

serviceWorker.register();
