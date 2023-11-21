import React, { useState }  from "react";

export default function Hooks(){

const[count, setCount]=useState(0);

const handleIncrement=()=>{
    setCount(count+1);
}

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment Again</button>
        </div>
    )
}