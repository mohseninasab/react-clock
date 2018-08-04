import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Posts = () =>{

    const ids = [
        {id:"1",name:"Post 1"},
        {id:"2",name:"Post 2"},
        {id:"3",name:"Post 3"},
    ]

    const list = ids.map((item)=>{
        return <Link key={item.id} to={"posts/"+item.id} className="list-group-item list-group-item-light list-group-item-action">{item.name}</Link>
    })

    return(
        <div className="row text-center mt-4 p-2">
            <div className="list-group col-sm-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4">
                {list}
            </div>
        </div> 
    );
}
export default Posts; 