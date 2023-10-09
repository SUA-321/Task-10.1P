import React, { useState } from 'react';
import {Outlet, Link, useNavigate} from 'react-router-dom';
import Input from '../Input'
import LoginStyle from '../LoginStyle.css'
import {signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword} from '../utils/firebase'


const Login = (props)=>{

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }



        const [contact, setContact] = useState({
            email: '',
            password: ''
        })
       
        console.log(contact);
    



    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    };
    
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(contact.email, contact.password);

          // If authentication is successful, navigate to the homepage
          navigate('/profile');
        } catch (error) {
          console.error('Authentication failed:', error.message);
          alert('Authentication failed. Please check your email and password.');
        }
      };
 

    return <div className= 'header-div'>
    <h2>Enter Your Username:</h2>
       <Input 
       name= 'email'
       type= 'email'
       placeholder ='Username'
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

       <button onClick={handleLogin}>
        Login
        </button>
  
        <br></br>

        <button onClick={logGoogleUser}>
        Login with Google
        </button>
        
  
       <br></br>
       <br></br>

       <Link className='link' to='/create-account'>
          Sign Up!
        </Link>

        <Outlet />
    </div>
}

export default Login;