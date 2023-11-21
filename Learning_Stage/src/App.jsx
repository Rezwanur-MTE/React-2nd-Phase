import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import React from 'react'
import Card from './components/cardCom'
import Header from './components/heading'
import List from './components/todos'
import Card2 from './components/Card2'
import StateTest from './StateTest'
import HOOKS from './HOOKS/index1'
import Hooks from './HOOKS/index2'
import FORM from './Form/form'
import Data from './useEffecthook/useEffect'
import Datafetch from './useEffecthook/DataFetch'


import data from './data.json'

function App() {
  const [count, setCount] = useState(0)

  let items=[];
  /*for(let x=1; x<data.length; x++){
    items.push(<Card name={data[x].name} address={data[x].address} number={data[x].number} /> );
  }*/

  items=data.map((objs)=><Card name={objs.name} address={objs.address} number={objs.number} /> );  

  /* Did the same thing 2 times , once with for loop and another time with javascript map.*/

  return (
 <div>
  <Header heading={data[0].heading} institute={data[0].institute} dept={data[0].dept} />

   {items}
   <List/>
   <Card2 desc=" props automatically comes into class component "/>
   <StateTest/>
   <HOOKS/>
   <Hooks/>
   <FORM/>
   <Data/>
   <Datafetch/>

  </div>
    
  )
}

export default App
