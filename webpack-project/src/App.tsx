import React from "react";
import { Demo } from "shared-component";
import webpack from "./assets/webpack.png";
import s from "./app.module.scss";

// const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className={s.app}>
      <img src={webpack} alt="" className={s.img} />
      <Demo />
      {/* {apiUrl} */}
    </div>
  );
}

export default App;
