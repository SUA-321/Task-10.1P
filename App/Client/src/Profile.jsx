import React from "react";
import { useState, useEffect } from 'react';
import {getAuth} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


function Profile ()
{
    const [user,setUser] = useState(null)
    const navigate = useNavigate()
    const auth = getAuth()
    useEffect(() => {

        setUser(auth.currentUser)

    } , [])

    const onLogout = () =>{
        auth.signOut();
        navigate('/')
    }
    return(
        <div>
            {user ? <h1>{user.email}</h1> : "Not Logged In"}

               <button onClick={onLogout}>
                  Log Out
               </button>
        </div>

    )
}
export default Profile