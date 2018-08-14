import React, { PureComponent } from "react";

//###########[ Second Bar ]#####################################################################
class SecondBar extends PureComponent {
  state = {
    secondBarAngle: new Date().getSeconds() * 6
  };

  componentDidMount = () => {
    this.timer = setInterval(
      () => this.setState({ secondBarAngle: new Date().getSeconds() * 6 }),
      1000
    );
  };
  // the method bellow will kill the ticking clock befor the unmount
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <rect
        style={{
          transform: `rotate(${this.state.secondBarAngle}deg)`,
          transformOrigin: "50% 50%"
        }}
        className="cls-7"
        x="146"
        y="61"
        width="4"
        height="91"
        rx="2"
        ry="2"
      />
    );
  }
}
//###########[ Minute Bar ]#####################################################################
class MinuteBar extends PureComponent {
  state = {
    minuteBarAngle: new Date().getMinutes() * 6
  };
  componentDidMount = () => {
    this.timer = setInterval(
      () => this.setState({ minuteBarAngle: new Date().getMinutes() * 6 }),
      1000
    );
  };
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };
  render() {
    return (
      <rect
        style={{
          transform: `rotate(${this.state.minuteBarAngle}deg)`,
          transformOrigin: "50% 50%"
        }}
        className="cls-6"
        x="145"
        y="73"
        width="6"
        height="79"
        rx="3"
        ry="3"
      />
    );
  }
}
//###########[ Hour Bar ]#######################################################################
class HourBar extends PureComponent {
  state = {
    hourBarAngle: new Date().getHours() * 30 + new Date().getMinutes() / 2
  };
  componentDidMount = () => {
    this.timer =  setInterval(
      () =>
        this.setState({
          hourBarAngle: new Date().getHours() * 30 + new Date().getMinutes() / 2
        }),
      1000
    );
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  render() {
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
//###########[ Exports ]########################################################################
export { SecondBar, MinuteBar, HourBar };
export default SecondBar;