import React, { useEffect, useState } from "react";

function Data(){

    const [count, setCount]= useState(0)
    const [isLoading,setIsLoading]= useState(false);

    useEffect(()=>{    // useEffect must contains an annonymous function
        console.log(" Fetching Data through use effect");

    }, [count]);  // this means it depends on count, it will rerender when count is called


    const handleCount=()=>{
        setCount(count=>count+2);
    }

    return(
        <div>
            {console.log("rendering")}
            <u> All about Data Fetching</u>
            <h1>Count: {count} </h1>
            <br/>
            <button onClick={handleCount} > Count even Up</button>
            <button onClick={()=>{
                setIsLoading(!isLoading);
            }}> Load</button>

        </div>
    )
}

export default Data;