import 'bootstrap/dist/css/bootstrap.css';
import {Alert} from 'react-bootstrap';
import React from 'react';
import Clock from './clock'



const Home = () =>{
    return(

        <div className="row text-center">
                <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4 p-0 mt-4">
                <Alert bsStyle="danger">∆∆ &emsp; this is Home page &emsp; ∆∆</Alert>
                <Clock />
                </div>
            </div>
    );
}

export default Home;

