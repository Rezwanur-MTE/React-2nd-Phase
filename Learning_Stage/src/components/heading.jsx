
import './card.css'

function Header(props) {

  const {heading, institute, dept}= props;  // destructuring , 

    return (
      <div className='head'> 
       <h1 className='project'>{heading}</h1> 
       <h3 className='varsity'>{institute}</h3>
       <h3 className='dept'>{dept}</h3>
       
      </div>
      
    )
  }

  export default Header;