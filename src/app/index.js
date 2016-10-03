import React from "react";
import { render } from "react-dom"

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="cos-xs-10 cos-xs-offset-1">
            <h1>React Bolierplate</h1>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));