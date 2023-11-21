import React,{Component} from "react";
export default class State extends Component {

    constructor(props){
        super(props)
        this.state={
            count : 0,
            
        }

    }

     handleIncrement=()=> {
        console.log("Clicked1");

        this.setState({
            count : this.state.count+1
        })
    }

    handledecrement=()=> {
        console.log("Clicked2");

        this.setState({
            count : this.state.count-1
        })
    }

    render(){

        const {count}=this.state;

        return (
            <div>
               <h1>Count: {count}</h1> 
               <button onClick={this.handleIncrement}>+</button>
               <button onClick={this.handledecrement}>-</button>
            </div>
        )
    }

}

