import React from "react";
import PropTypes from "prop-types";

const PropTypeCard = props => {
  return (
    <div>
      {props.firstName}&emsp;
      {props.lastName} - age:
      {props.age}
    </div>
  );
};
// the method below will check the type of variables inside props
PropTypeCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.object
};
export default PropTypeCard;
