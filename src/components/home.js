import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "animate.css";
import Clock from "./react-clock/clock";

const Home = () => {
  return (
    <div className="row text-center">
      <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4 p-0 mt-5">
        <div className="col-6 offset-md-3 mt-5 ">
          <Clock frameColor="" bgColor="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
