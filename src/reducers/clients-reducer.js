const contactList  = (state = {}, action) =>{
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;

    case "FETCH_SUCCESS":{
      console.log("inseide the reducer->",action.payload)
      return { ...state, contact: action.payload };
    }

    default:
      return state;
  }
}
export default contactList;
