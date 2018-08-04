//######[ bootstrap Libraries ]##########################################
import 'bootstrap/dist/css/bootstrap.css';
import {Alert, Button} from 'react-bootstrap';
import 'animate.css';

//######[ React Libraries ]##############################################
import React,{Component} from 'react';

class Card extends Component{

    constructor(props){
        super(props)
        this.state = {
            title:props.reactTitle,
            type:props.reactType,
            buttonLable:"Animate",
            password:"tighen1371",
            animation:'',
            
        }
    }
    showDanger = ()=>{
        if(this.state.title === this.props.reactTitle){
            this.setState({
                title:"∆∆ changed to somthing dangerous ∆∆",
                type:"danger",
                buttonLable:"Change Back",
                animation:"animated infinite bounce delay-0.1s"    
            });
        }else{
            this.setState({
                title:this.props.reactTitle,
                type:this.props.reactType,
                buttonLable:"Animate",
                animation:''
            })
        }
    }

    render(){
        if(this.state.password === this.props.password){
        return(
            <div className="text-center">
                <Alert className={this.state.animation} bsStyle={this.state.type}>
                {this.state.title}
                </Alert>
                <Button className="col-5" bsStyle={this.state.type} onClick={this.showDanger}>
                {this.state.buttonLable}
                </Button>
            </div>
        )}else{
            return(
                <h4 className="text-danger">your are not allowed to enter!!</h4>
            )
        }
    }
}

export default Card;


