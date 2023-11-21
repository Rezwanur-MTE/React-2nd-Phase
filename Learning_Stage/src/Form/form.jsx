import React, { useState } from "react";
import './formstyle.css'

export default function FORM(){

    /*const [name, setName]= useState(" ");
    const [email, setEmail]= useState(" ");
    const [password, setPassword]= useState(" ");*/
    const[user, setUser]=useState({name:" ", email:" ", password:" "});

    const{name, email, password}= user;

   /* const handleNameChange=(e)=>{
        console.log(e.target.value);
        //setName(e.target.value);
        setUser({name: e.target.value, email, password});
    }

    const handleEmailChange=(e)=>{
        console.log(e.target.value);
       // setEmail(e.target.value);
       setUser({name,email:e.target.value,password});
    }

    const handlePassChange=(e)=>{
        console.log(e.target.value);
       // setPassword(e.target.value);
       setUser({name, email, password: e.target.value});
    } */

    const handleSubmit=(e)=>{
        console.log("Form Submitted");
        console.log(name,email,password);
       /* let userinfo={
            name: name,
            email: email,
            password:password
        } */
        console.log(user);
        e.preventDefault();
    }


    // A common event handler function , don't need to declare function of every onClick or onChange event.

    const handleChange=(e)=>{

         const filename =e.target.name;
         if(filename==="name"){
            setUser({name: e.target.value, email, password});
         }

         if(filename==="email"){

            setUser({name, email:e.target.value, password});

         }
         if(filename==="password"){
            setUser({name, email, password: e.target.value});

         }
          e.preventDefault();
    }


    return (
        <div className="form1">
            <u>React Form</u>
            <h2>Registration</h2>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="name"  >Name:</label>
                <input type="text" name="name" id="name"
                value={name} onChange={handleChange} required/>
<br/>
                <label htmlFor="email" >Email:</label>
                <input type="email" name="email" id="email" 
                value={email} onChange={handleChange} />
<br/>
                <label htmlFor="password" >Passcode:</label>
                <input type="password" name="password" id="password"
                value={password} onChange={handleChange} required/>
<br/>
                <button type="submit">Register</button>



            </form>

        </div>
    )
}