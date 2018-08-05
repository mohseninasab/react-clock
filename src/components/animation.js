// ######[ Libraries ]############################
import "../css/custom-style.css";
import React, { PureComponent } from "react";
import Card from "../hoc/card";
import ReactAnimation from "./animation-react-1";
import ReactAnimation2 from "./animation-react-2";

class Animation extends PureComponent {
  state = {
    title: "No Animation",
    type: "info",
    password: "tighen1371"
  };

  render() {
    return (
      <div className="row ml-0 mr-0 p-0">
        <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 p-1 mt-5">
          <div className="p-2 border rounded">
            <Card
              reactTitle={this.state.title}
              reactType={this.state.type}
              password={this.state.password}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-0 p-1 mt-5">
          <div className="p-2 border rounded text-center">
            <ReactAnimation />
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 p-1 mt-3">
          <div className="p-2 border rounded text-center">
            <ReactAnimation2 />
          </div>
        </div>
      </div>
    );
  }
}

export default Animation;
