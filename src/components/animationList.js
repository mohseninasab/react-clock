import React from "react";

const AnimationList = props => {
  return (
    <option key={props.index} value={props.animation}>
      {props.animation}
    </option>
  );
};

export default AnimationList;
