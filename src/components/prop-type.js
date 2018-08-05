import React, { Component } from "react";
import PropTypeCard from "./prop-type-card";

class PropType extends Component {
  state = {
      firstName :"Mehdi",
      lastName:"Mohseni Nasab",
      age:27,
      hobbies:['Music','Movie','runing','Coding','Art in any form']
  };
  render() {
    return (
      <div className="row mt-4">
        <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4 p-2 text-center">
          <PropTypeCard {...this.state}/>
        </div>
      </div>
    );
  }
}
export default PropType;
