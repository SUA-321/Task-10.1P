import React, { useState } from 'react';
import './SignupSection.css'; 
import Button from './Button'
import Input from './Input'




const SignupSection = () => {
  
  
  const [contact, setContact] = useState({
    email: '',
  })
  const handleChange = (event)=>{
    const {name, value} = event.target
    setContact ((preValue)=>{  
    return {
    ...preValue,
    [name]: value
    }
    })
};


  
  const handeClick = async()=>{
    await fetch ('http://localhost:8003/', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: contact.email
      })

    })
    .then (response => response.json())
    .then (data=> JSON.parse(data))
    .catch(err =>{
      console.log("Error: " + err)
    })
  }


  return (
      <div className="signup-form">
      <h2>Sign Up for Our Daily Insider                 </h2>
      <Input 
       name='email'
       type= 'email'
       placeholder ='Email'
       onChange = {handleChange}
       value = {contact.email}
       />

        <Button
          type = 'submit'
          text = 'Submit'
          onClick = {handeClick}
          />

      </div>
  );
};

export default SignupSection;
