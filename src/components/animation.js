import { Alert, Button } from "react-bootstrap";
import '../css/custom-style.css'
import React, { PureComponent } from "react";
import Transition from "react-transition-group/Transition";
import Card from "../hoc/card";

class Animation extends PureComponent {
  state = {
    title: "No Animation",
    type: "info",
    password: "tighen1371",
    show: true
  };

  showAlert = () => {
    this.setState({
      show: !this.state.show ? true : false
    });
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4 p-0 mt-4">
          <Card
            reactTitle={this.state.title}
            reactType={this.state.type}
            password={this.state.password}
          />
          <hr className="mt-3 mb-4" />
          <Transition in={this.state.show} timeout={500}>
          {/* you can use mountOnEnter and unmountOnExit as the transition attribute if you want to remove or add dom element */}
            {state => (
              <Alert
                className={`mt-4 popup popup-${state}`}
                bsStyle={"warning"}
              >
                ∆∆ React Animation&emsp;
                <span className="text-dark bg-gray pl-2 pr-2 pt-1 pb-1 rounded">
                  state: {state}
                </span>
              </Alert>
            )}
          </Transition>
          <Button className="col-5" bsStyle="warning" onClick={this.showAlert}>
            Animate React
          </Button>
        </div>
      </div>
    );
  }
}

export default Animation;
