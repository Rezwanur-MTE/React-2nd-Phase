import React, {Component} from "react";

class EventHandler extends Component {

    constructor(props){
        super(props)
        this.state={
            ChangeValue: ''
        }

    }



handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({
        ChangeValue : e.target.value
    })
}

handleClick=()=>{
    console.log("Event Clicked");

        <p>{this.state.ChangeValue}</p>

}
 

    render(){

        return(
            <div>
            <h2><u>Event Handler test</u></h2> 
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.handleClick}>Click here</button>
            <p>{this.state.ChangeValue}</p>
         </div>
        )
       
    }
}

export default EventHandler;