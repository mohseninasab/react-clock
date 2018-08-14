
const fetchPostsRequest = () => {
  console.log("ACTION: fetchPostsRequest");
  return {
    type: "FETCH_REQUEST"
  }
}

const fetchPostsSuccess = (payload) => {
  console.log("inside the action ->",payload);
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

const fetchPostsError = () => {
  console.log("ACTION: fetchPostsError");
  return {
    type: "FETCH_ERROR"
  }
}
export { fetchPostsRequest, fetchPostsSuccess, fetchPostsError };
