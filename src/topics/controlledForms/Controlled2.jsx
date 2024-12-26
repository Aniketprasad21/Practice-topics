import React, { useState } from 'react'

const Controlled2 = () => {
    let[formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
    })
    let handleChange = (e)=>{
        let{name,value} = e.target;
        console.log({[name]:value});
        setFormData({...formData,[name]:value})
        
    }
    function formSubmit(e){
        e.preventDefault();
        console.log(formData);
        setFormData({name:"",
            email:"",
            password:"",
          })
        
    }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        placeholder='Enter Name' 
        id ='name'
        value={formData.name}
        name='name'
        onChange={handleChange}
        /><br /><br />

        <label htmlFor="">Email</label>
        <input 
        type="text" 
        placeholder='Enter Email'
        id='email'
        value={formData.email}
        onChange={handleChange}
        name='email'
        /><br /><br />

        <label htmlFor="">Password</label>
        <input 
        type="text" 
        placeholder='Enter Password'
        id='password'
        value={formData.password}
        onChange={handleChange}
        name='password'
        /><br /><br />

        <input type="submit"/><br /><br />

      </form>
    </div>
  )
}

export default Controlled2
