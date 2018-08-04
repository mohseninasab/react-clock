//######[ bootstrap Libraries ]##########################################
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom-style.css';
// import $ from 'jquery';
// import Popper from 'popper.js';

//######[ React Libraries ]##############################################
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, NavLink, Switch} from 'react-router-dom';

//######[ components ]###################################################
import Home from  './components/home';
import Posts from  './components/posts';
import Profile from  './components/profiles';
import PostItem from  './components/postItem';
import Animation from  './components/animation';
import Conditional from  './components/conditional';

//#######################################################################

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <nav className="nav pt-2 p1">
                        <NavLink className="nav-link" to="/" exact activeStyle={{color:'purple'}}>Home</NavLink>
                        <NavLink className="nav-link" to="/posts" activeStyle={{color:'purple'}}>Posts</NavLink>
                        <NavLink className="nav-link" to="/animation" activeStyle={{color:'purple'}}>∆nimation</NavLink>
                        <NavLink className="nav-link" to="/conditional" activeStyle={{color:'purple'}}>Conditional</NavLink>
                        <NavLink className="nav-link" to="/profile" activeStyle={{color:'purple'}}>Profile</NavLink>
                    </nav>
                </header>
                <hr className="mb-2 mt-2" />
                <Switch>
                    <Route path="/posts/:id" component={PostItem} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/animation" component={Animation} />
                    <Route path="/conditional/:value" component={Conditional} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" exact component={Home} />
                    <Route render={()=> <h2 className="text-center mt-5 text-danger"><span className="text-white bg-danger rounded pl-2 pr-2">404</span> - OOPS!!! The page isn't avalibale</h2>}/>
                </Switch>
            </div>
        </BrowserRouter>    
    );
}

ReactDOM.render( <App/> , document.getElementById("root"));