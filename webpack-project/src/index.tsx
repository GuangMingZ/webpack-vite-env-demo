import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let root: any;

function render(props: any) {
  const { container } = props;
  const defaultContainer = document.getElementById(
    "webpack-root"
  ) as HTMLElement;
  root = ReactDOM.createRoot(container ?? defaultContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

render({});