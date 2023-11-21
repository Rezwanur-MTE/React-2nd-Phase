
import './card.css'

//const name="Md. Rezwanur";
//const address= " Shahidul Hall, RUET";
//const num= 1521521324;


function Card(props) {

  return (
    <div className='card'> 
     <h3 className='User'>{props.name}</h3>
     <h3 className='address'>{props.address}</h3>
     <h3 className='phone'>{props.number}</h3>
     <h3 className='year'>{new Date().getFullYear()}</h3>
    </div>
    
  )
}

export default Card;


