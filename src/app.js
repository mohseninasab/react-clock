//######[ bootstrap Libraries ]##########################################
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom-style.css';

//######[ React Libraries ]##############################################
import React,{ Component } from 'react';
import { BrowserRouter , Route, NavLink, Switch } from 'react-router-dom';

//######[ Components ]##############################################
import Home from  './components/home';
import Posts from  './components/posts';
import Profile from  './components/profiles';
import PostItem from  './components/postItem';
import Animation from  './components/animation';
import Conditional from  './components/conditional';
import ClientList from  './components/client-list';
import PropType from './components/prop-type';
import Error404 from './components/Error404'

class App extends Component{
   
    render(){
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <nav className="nav pt-2 p1">
                            <NavLink className="nav-link" activeClassName="selected" to="/" exact >△Home</NavLink>
                            <NavLink className="nav-link" activeClassName="selected" to="/posts">★Posts</NavLink>
                            <NavLink className="nav-link" activeClassName="selected" to="/animation">▶︎Animation</NavLink>
                            <NavLink className="nav-link" activeClassName="selected" to="/conditional">✸Conditional</NavLink>
                            <NavLink className="nav-link" activeClassName="selected" to="/profile" >◉Profile</NavLink>
                            <NavLink className="nav-link" activeClassName="selected" to="/proptype">☯︎Prop Type</NavLink>
                            <NavLink className="nav-link" activeClassName="selected" to="/contactlist">♦︎Contact List</NavLink>
                        </nav>
                    </header>
                    <hr className="mb-2 mt-2" />
                    <Switch>
                        <Route path="/posts/:id" component={PostItem} />
                        <Route path="/contactlist" component={ClientList} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/animation" component={Animation} />
                        <Route path="/conditional/:value" component={Conditional} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/proptype" component={PropType} />
                        <Route path="/" exact component={Home} />
                        <Route render={()=> <Error404 />}/>
                    </Switch>
                </div>
            </BrowserRouter>    
        );
    }
}


export default App;