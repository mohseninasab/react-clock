import 'bootstrap/dist/css/bootstrap.css';
import '../css/custom-style.css';
import React from 'react';
import photo from '../images/photo.svg'
// import {Link} from 'react-router-dom';

const Profile = (props) =>{

    const contact = {
        firstName:"Mehdi",
        lastName:"Mohseni Nasab",
        bio:"currently foucesing on the front-end web development and trying to achive the best designer in the market",
        photoUrl:photo
    }

    return(
        <div className="row text-center">
        <div className="col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4 p-0 mt-4">
            <div className="card text-center">
                <div className="card-header">
                    Profile
                </div>
                <img className="profileImage ml-auto mr-auto mt-3" src={contact.photoUrl} alt={contact.lastName}/>               <div className="card-body">
                    <h5 className="card-title">{contact.firstName} {contact.lastName}</h5>
                    <p className="card-text">{contact.bio}</p>
                    <a href="https://www.instagram.com/mehdi_mohseni_nasab/" className="btn btn-primary">instagram</a>
                </div>
                <div className="card-footer text-muted">
                    JUL 2018 ®
                </div>
            </div>
        </div>
        </div>
    );
}

export default Profile;



