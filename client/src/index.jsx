import React from "react";
import { render } from "react-dom";


const App = () => {
  return (
    <div>
      <h1>Hello Iron Man!</h1>
    </div>
  )
}


render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);