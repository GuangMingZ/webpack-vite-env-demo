// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { Demo } from "shared-component";
import vite from "./assets/vite.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <img src={vite} alt="" className={"img"} />
      <Demo />
    </div>
  );
}

export default App;
