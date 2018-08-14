import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPostsSuccess,
  fetchPostsRequest,
  fetchPostsError
} from "../actions";
import "bootstrap";

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.mapDispatchToProps();
  }
  renderList(input) {
    return input.map(item => {
      return (
        <div key={item.id} className="card text-center mt-3">
          <div className="card-header p-2">
            {item.firstName + " " + item.lastName}
          </div>
          <div className="card-body p-2">
            <h5 className="card-title text-secondary">Email</h5>
            <p className="card-text ">{item.email}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12  col-md-6 col-lg-4 offset-md-3 offset-lg-4">
          {this.props.contact === undefined
            ? null
            : this.renderList(this.props.contact)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    
    return fetchContact().then(([response, json]) => {
      if (response.status === 200) {
        console.log("inside the dispatcher -> ",json)
        dispatch(fetchPostsSuccess(json));
      } else {
        dispatch(fetchPostsError());
      }
    });
  };
};

const fetchContact = () => {
  const first_URL = "https://api.myjson.com/bins/5za3o";
  return fetch(first_URL, { method: "GET" }).then(response =>
    Promise.all([response, response.json()])
  );
};

const mapStateToProps = state => {
  console.log("inside the component ->",state.contactList.contact);
  return {
    contact: state.contactList.contact
  };
};

export default connect(
  mapStateToProps,
  { mapDispatchToProps }
)(ClientList);
