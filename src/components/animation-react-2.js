import React, { Component } from "react";
import "../css/custom-style.css";
import { Alert, Button } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

class ReactAnimation2 extends Component {
  state = {
    show: true
  };
  showAlert = () => {
    this.setState({ show: !this.state.show ? true : false });
  };
  render() {
    return (
      <div>
        <CSSTransition in={this.state.show} timeout={0} classNames="popup">
          <Alert bsStyle={"danger"} className="popup">
            ∆∆ React CSS Transition&emsp;«{(!this.state.show).toString()}»
          </Alert>
        </CSSTransition>
        <Button className="col-5" bsStyle={"danger"} onClick={this.showAlert}>
          Aniamte it
        </Button>
      </div>
    );
  }
}
export default ReactAnimation2;
