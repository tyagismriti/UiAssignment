import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function LoginForm({setisLoggedIn}) {
  const navigate=useNavigate();
  const [FormData,setFormData]=useState({
    email:"",
    password:""
  })
  const[showPassword,setPassword]=useState(false);
  function changeHandler(e){
    setFormData((prevState)=>({
       ...prevState,
       [e.target.name]:e.target.value,
    }))
  }
  function submitHandler(e){
    e.preventDefault();
    setisLoggedIn(true);
    navigate("/dashboard");
    toast.success("Logged In");
    
  }
  return (
    <div>
        <form className='flex flex-col w-full gap-y-4 mt-6'action="" onSubmit={submitHandler} >
             <label className='w-full  ' htmlFor="email address"><p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-[#EF4669] font-bold'>*</sup></p>
             <input  className='w-full bg-[#2C333F] rounded-[0.5rem] text-[#afb2bf] p-[12px] outline-none border-b border-[#AFB2B1]' 
             type='text'
             id='email address'
             placeholder='Enter email address'
             required
             name='email'
             value={FormData.email}
             onChange={changeHandler}/>
            </label>

             <label className='w-full relative'htmlFor="password">
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
              Password <sup className='text-[#EF4669] font-bold'>*</sup>
            </p>
             <input 
             className='w-full  bg-[#2C333F] rounded-[0.5rem] text-[#afb2bf] p-[12px] outline-none border-b border-[#AFB2B1]'
             type={showPassword ?'text':'password'}
             id='password'
             placeholder='Enter Password'
             required
             name='password'
             value={FormData.password}
             onChange={changeHandler}
              />
              <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
                   setPassword(!showPassword)
              }}>{ showPassword ?<IoEyeOutline fontSize={24} fill='#AFB2BF'/> :<IoEyeOffOutline fontSize={24} fill='#AFB2BF'/>}
              </span>
              <Link to='#'>
              <p className='text-xs mt-1 text-[#47A5C5] max-w-max ml-auto'>Forgot Password</p>
              </Link>
              </label>
             <button className='w-full cursor-pointer bg-yellow-300 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>Sign In</button>
        </form>
    </div>
  )
}

export default LoginForm