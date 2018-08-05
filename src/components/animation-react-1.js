import React, { PureComponent } from "react";
import "../css/custom-style.css";
import { Alert, Button } from "react-bootstrap";
import Transition from "react-transition-group/Transition";

class ReactAnimation extends PureComponent {
  state = {
    show: true
  };

  showAlert = () => {
    this.setState({ show: !this.state.show ? true : false });
  };
  render() {
    return (
      <div>
        <Transition in={this.state.show} timeout={0}>
          {/* you can use mountOnEnter and unmountOnExit as the transition
           attribute if you want to remove or add dom element */}
          {state => (
            <Alert className={`popup popup-${state}`} bsStyle={"warning"}>
              ∆∆ React Transition&emsp;
              <span className="text-dark bg-gray pl-2 pr-2 pt-1 pb-1 rounded">
                state: {state}
              </span>
            </Alert>
          )}
        </Transition>
        <Button className="col-5"  bsStyle="warning" onClick={this.showAlert}>
          Animate React
        </Button>
      </div>
    );
  }
}

export default ReactAnimation;
