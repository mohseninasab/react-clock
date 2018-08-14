import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import React from "react";


const PostItem = props => {
  console.log(props);
  return (
    <div className="row mt-4">
      <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 p-0">
        <div className="card">
          <div className="card-header pl-3 pr-3 pt-2 pb-2">
            {props.location.state.title }
            <Link type="" className="close"to="/posts">
              <span aria-hidden="true">&times;</span>
            </Link>
          </div>
          <div className="card-body pl-3 pr-3 pt-2 pb-2">
            <blockquote className="blockquote mb-0">
              <p className="text-justify text-dark" style={{fontSize:"0.9rem"}}>{props.location.state.text}</p>
              <footer className="blockquote-footer" style={{fontSize:"0.8rem"}}>
                Posted by: {props.location.state.author.firstName + " " + props.location.state.author.lastName}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
