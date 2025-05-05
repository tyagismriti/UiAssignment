

import React from 'react'
import Template from '../components/Template'
import loginimg from '../assets/login.webp';
import frameimg from '../assets/frame.png'
import { useOutletContext } from 'react-router-dom';
function Login() {
  let [setisLoggedIn]=useOutletContext();
  return (
    <Template
     loginimg={loginimg} 
     frameimg={frameimg}
     type='login' 
     heading1='Welcome back'
     p1='Sign in using your registered account:'
     setisLoggedIn={setisLoggedIn}
     />
  )
}

export default Login