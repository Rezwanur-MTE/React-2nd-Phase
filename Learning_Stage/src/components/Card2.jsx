import React , {Component} from 'react'

class Card2 extends Component{
    render(){
        return(
            <div>
   
             <h2>Hello From Class Component Card2</h2>
            <h3>{this.props.desc}</h3> 

            </div>
            
        )
       
    }
}

export default Card2;