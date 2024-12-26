import React, { useState } from 'react'

const Controlled = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let handleName = (e)=>{
        console.log(e.target.value);
        setName(e.target.value);
        
    };

    let handleEmail = (e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
        
    };

    let handlePassword = (e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    let formSubmit = e=>{
        e.preventDefault()
        console.log({name,email,password});
        setName("")
        setEmail("")
        setPassword("")
    };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" placeholder='Enter name' value={name} onChange={handleName}/><br /><br />
        <label htmlFor="">Email:</label>
        <input type="email" placeholder='Enter email' value={email} onChange={handleEmail}/><br /><br />
        <label htmlFor="">Password:</label>
        <input type="pass" placeholder='Password' value={password} onChange={handlePassword}/><br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}  

export default Controlled;
