import React, { Component } from "react";

//###########[ Second Bar ]#####################################################################
class SecondBar extends Component {
  state = {
    secondBarAngle: 0
  };
  setTime = () => {
    let time = new Date();
    this.setState({ secondBarAngle: time.getSeconds() * 6 });
  };
  tick = () => {
    let time = new Date();
    this.setState({
      secondBarAngle: time.getSeconds() * 6
    });
  };
  render() {
    setInterval(this.tick, 1000);
    return (
      <rect
        style={{
          transform: `rotate(${this.state.secondBarAngle}deg)`,
          transformOrigin: "50% 50%"
        }}
        className="cls-7"
        x="144"
        y="61"
        width="8"
        height="91"
        rx="4"
        ry="4"
      />
    );
  }
}
//###########[ Minute Bar ]#####################################################################
class MinuteBar extends Component {
  state = {
    minuteBarAngle: 0
  };
  setTime = () => {
    let time = new Date();
    this.setState({ minuteBarAngle: time.getMinutes() * 6 });
  };
  tick = () => {
    let time = new Date();
    this.setState({
      minuteBarAngle: time.getMinutes() * 6
    });
  };
  render() {
    setInterval(this.tick, 1000);
    return (
      <rect
        style={{
          transform: `rotate(${this.state.minuteBarAngle}deg)`,
          transformOrigin: "50% 50%"
        }}
        className="cls-6"
        x="144"
        y="73"
        width="8"
        height="79"
        rx="4"
        ry="4"
      />
    );
  }
}
//###########[ Hour Bar ]#######################################################################

class HourBar extends Component {
  state = {
    hourBarAngle: Date()
  };
  setTime = () => {
    let time = new Date();
    this.setState({ hourBarAngle: time.getHours() * 30 });
  };
  tick = () => {
    let time = new Date();
    this.setState({
      hourBarAngle: time.getHours() * 30
    });
  };
  render() {
    setInterval(this.tick, 1000);
    return (
      <rect
        style={{
          transform: `rotate(${this.state.hourBarAngle}deg)`,
          transformOrigin: "50% 50%"
        }}
        className="cls-5"
        x="144"
        y="82"
        width="8"
        height="70"
        rx="4"
        ry="4"
      />
    );
  }
}
//###########[ Export Default ]################################################################
export { SecondBar, MinuteBar, HourBar };
