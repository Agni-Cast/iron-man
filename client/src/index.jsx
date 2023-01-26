import React from "react";
import { render } from "react-dom";
import QAIndex from './components/QAcomponents/QAIndex.jsx';

const App = () => {
  return (
    <div>
      <h1>Hello Iron Man!</h1>
      <QAIndex />

    </div>
  )
}


render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);