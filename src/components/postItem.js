import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Alert} from 'react-bootstrap';



const PostItem = (props) =>{
    console.log(props);
    return(
        <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4 p-0 mt-4"> 
                <Alert bsStyle="warning">The ID of The Post Is: ({props.match.params.id})</Alert>
            </div>
        </div>
    );
}

export default PostItem;