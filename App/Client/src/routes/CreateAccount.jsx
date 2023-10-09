import React, { useState } from 'react';
import {Outlet, Link, Route, useNavigate} from 'react-router-dom';
import Input from '../Input'
import CreateAccountStyle from '../CreateAccountStyle.css'
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from '../utils/firebase'


const CreateAccount = (props)=>{
        const [contact, setContact] = useState({
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
        })
       
    const {displayName, email, password, confirmPassword} = contact;
    
    console.log(contact);


    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
      
        try {
          const { user } = await createAuthUserWithEmailAndPassword(email, password);
          await createUserDocFromAuth(user, { displayName });
      
          // Redirect to the login page
          navigate('/login');
        } catch (error) {
          console.log('error in creating user', error.message);
        }
      };
      
      

 
    return <div className= 'header-div'>

    <h2>Enter Your Name:</h2>
       <Input 
       name= 'displayName'
       type= 'text'
       placeholder ='Name'
       onChange = {handleChange}
       value = {contact.displayName}
       />

       <br></br>

       <h2>Enter Your Email:</h2>
       <Input 
       name= 'email'
       type= 'email'
       placeholder ='Email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <br></br>

       <h2>Enter Your Password:</h2>
       <Input 
       name='password'
       type= 'password'
       placeholder ='Password'
       onChange = {handleChange}
       value = {contact.password}
       />

        <br></br>

       <h2>Enter Your Password:</h2>
       <Input 
       name='confirmPassword'
       type= 'password'
       placeholder ='Confirm Password'
       onChange = {handleChange}
       value = {contact.confirmPassword}
       />



       <br></br>

      
       <button onClick={handleSubmit}>
        Sign Up!
        </button>
  
       <br></br>
       <br></br>

       <Link className='link' to='/login'>
        Login!
        </Link>

        <Outlet />
    </div>
}

export default CreateAccount;