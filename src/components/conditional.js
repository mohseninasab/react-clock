import 'bootstrap/dist/css/bootstrap.css';
import {Alert} from 'react-bootstrap';
import React from 'react';



const Conditional = (props) =>{
    const value = (props.match.params.value === 'true');
    return(
        <div className="row text-center">
        <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4 p-0 mt-4">
            { value ?
            <Alert bsStyle="success">Yes it's true :-) </Alert>
            :
            <Alert bsStyle="danger">Oh damn it's false :-( </Alert>    
            }
            </div>
        </div>
    );
}

export default Conditional;