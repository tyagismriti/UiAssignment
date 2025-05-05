

import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const [showPassword,setPassword]=useState({
    password1:false,
    password2:false
})
function changeHandler(e){
    setPassword((prev)=>({
        ...prev,
         [e.target.name]:e.target.value
    }))
}
function Meetup() {
  return (
    <>
    <div>
    <input className='border-2'
              required
              type={showPassword.password1 ?'text':'password'}
              id="coPassword"
              name='confirm_password'
              placeholder='Confirm Password'/><span name="password1" onClick={changeHandler}>{ showPassword.password1 ?<IoEyeOutline /> :<IoEyeOffOutline />}</span>
    </div>
        <div>
        <input className='border-2'
                  required
                  type={showPassword.password2 ?'text':'password'}
                  id="coPassword"
                  name='confirm_password'
                  placeholder='Confirm Password'/><span name="password2"onClick={changeHandler}>{ showPassword.password2 ?<IoEyeOutline /> :<IoEyeOffOutline />}</span>
        </div>
        </>
  )
}

export default Meetup