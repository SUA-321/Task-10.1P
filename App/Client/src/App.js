import React from 'react';
import './App.css';
import HomePage from './routes/HomePage.jsx'
import Login from './routes/Login.jsx'
import CreateAccount from './routes/CreateAccount'
import Navbar from './Navbar';
import Profile from './Profile';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    
    <Routes>
    <Route index element={<HomePage/>}/>
    
    <Route path='/' element={<Navbar/>}>

    <Route path='/login' element={<Login />}/>
    
    <Route path='/create-account' element={<CreateAccount />}/>
    
    <Route path='/profile' element={<Profile />}/>

    
    </Route>
    </Routes>
  );
}
export default App;
