import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import posts from "../json/posts.json";

const Posts = () => {
  const list = posts.map(item => {
    return (
      <Link
        key={item.id}
        to={{
          pathname:
            "posts/" + item.author.firstName + "-" + item.author.lastName,
          state: {
            id: item.id,
            author: item.author,
            text: item.text,
            title: item.title
          }
        }}
        className="list-group list-group-item list-group-item-action"
      >
        {item.author.firstName} {item.author.lastName}
      </Link>
    );
  });

  return (
    <div className="row text-center mt-4">
      <Alert
        bsStyle="success"
        className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4"
      >
        <strong>Posts</strong>
      </Alert>
      <div
        style={{ paddingRight: "0px" }}
        className="list-group col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4"
      >
        {list}
      </div>
    </div>
  );
};
export default Posts;
