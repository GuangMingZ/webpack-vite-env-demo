import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="webpack-project">
        <iframe
          className="iframe"
          sandbox="allow-popups allow-scripts allow-top-navigation allow-forms allow-downloads allow-same-origin"
          src="//localhost:3000/"
        />
      </div>
      <div className="vite-project">
        <iframe
          className="iframe"
          sandbox="allow-popups allow-scripts allow-top-navigation allow-forms allow-downloads allow-same-origin"
          src="//localhost:3001/"
        />
      </div>
    </>
  );
}

export default App;
