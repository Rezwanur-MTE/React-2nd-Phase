import React, { useEffect, useState } from "react";

const loadingMessage= <p> Data Loaded.</p>;

const  Datafetch=()=>{

    const [todos, setTodos]= useState(null);
    const [isLoading, setIsLoading]= useState(true);


    useEffect(()=>{

       setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{

            return res.json()

        })
        .then((data)=>{
            setTodos(data);
            console.log(todos);
            setIsLoading(false);

        });
       }, 2000);

    },[]);

   const todosElement = todos && todos.map((todo)=>{
    return (<p key={todo.id} >{todo.title}</p>)
 })



    return (
        <div>
            <h1><u>DataFetch through useEffect...</u></h1>
           
            <h3>Todos</h3>
            {isLoading && loadingMessage}
            {
               todosElement
            }
        </div>
    )
}

export default Datafetch;