import React from "react";
import { render } from "react-dom"

import { Sample } from "./components/Sample";

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="cos-xs-10 cos-xs-offset-1">
            <h1>React Bolierplate</h1>
            <p>with Bootstrap</p>
            <Sample />
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));