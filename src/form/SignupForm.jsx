

import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function SignupForm() {
  const navigate=useNavigate();
  const [FormData,setFormData]=useState({
    first_name:"",
    last_name:"",
    email:"",
    create_password:"",
    confirm_password:""

  })
   const[showPassword1,setPassword1]=useState(false);
   const[showPassword2,setPassword2]=useState(false);
   const [student,setStudent]=useState('student');
 
  function changeHandler(e){
     setFormData((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
     }))
  }
  function submitHandler(e){
    e.preventDefault();
    if(FormData.create_password!=FormData.confirm_password){
      toast.error("password not matched")
      return;
    }
  
   navigate('/login');
   toast.success("Account created");
  }
  return (
    <div >
      <div className='flex bg-[#2C333F] p-1 gap-x-1 rounded-full max-w-max  my-6  border-b border-[#AFB2B1] '>
        <button className={student=='student'?' text-white cursor-pointer bg-[#000814] py-2 px-5 rounded-full transition-all duration-200':'cursor-pointer text-[#AFB2B1] bg-transparent py-2 px-5 rounded-full transition-all duration-200'} onClick={()=>{
           setStudent('student');
        }}>Student</button>
        <button className={student=='instructor'?' text-white cursor-pointer bg-[#000814] py-2 px-5 rounded-full transition-all duration-200':'cursor-pointer text-[#AFB2B1] bg-transparent py-2 px-5 rounded-full transition-all duration-200'} onClick={()=>{
           setStudent('instructor');
        }}>Instructor</button>
      </div>
        <form  action="first_name" onSubmit={submitHandler}> 
           <div className='flex gap-x-4 mt-[20px]'>
          <label className="w-full" htmlFor="first_name">
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name <sup className='text-[#EF4669] font-bold'>*</sup></p>
           <input className='outline-none w-full bg-[#2C333F] rounded-[0.5rem] text-[#afb2bf] p-[12px] border-b border-[#AFB2B1]'
           required
           type="text" 
           id="first_name"
           value={FormData.first_name}
           onChange={changeHandler}
           name='first_name'
           placeholder='Enter first name'
           />
          </label>
          <label className="w-full" htmlFor="last_name">
           <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name <sup className='text-[#EF4669] font-bold'>*</sup></p>
           <input className='w-full outline-none bg-[#2C333F] rounded-[0.5rem] text-[#afb2bf] p-[12px] border-b border-[#AFB2B1]'
           required
           type="text" 
           id="last_name"
           value={FormData.last_name}
           onChange={changeHandler}
           name='last_name'
           placeholder='Enter last name'
           />
          </label>
           </div>

           <div className='mt-[20px]'>
           <label className="w-full" htmlFor="email">
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-[#EF4669] font-bold'>*</sup></p>
           <input className='w-full outline-none bg-[#2C333F] rounded-[0.5rem] text-[#afb2bf] p-[12px] border-b border-[#AFB2B1]'
           required
           type="text" 
           id="email"
           value={FormData.email}
           onChange={changeHandler}
           name='email'
           placeholder='Enter email address'/>
           </label>
           </div>





            <div className='flex gap-x-4 mt-[10px]'>
            <label className="w-full relative" htmlFor="crPassword">
              <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password <sup className='text-[#EF4669] font-bold'>*</sup></p>
            <input className='w-full outline-none bg-[#2C333F] rounded-[0.5rem] text-[#afb2bf] p-[12px] border-b border-[#AFB2B1]'
            required
            type={showPassword1 ?'text':'password'}
            id="crPasswod"
            value={FormData.create_password}
            onChange={changeHandler}
            name='create_password'
            placeholder='Enter Password'/>
            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
                              setPassword1(!showPassword1)
                         }}>{ showPassword1 ?<IoEyeOutline fontSize={24} fill='#AFB2BF'/> :<IoEyeOffOutline fontSize={24} fill='#AFB2BF'/>}</span></label>
         
            
            <label htmlFor="coPassword"  className="w-full relative">
              <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-[#EF4669] font-bold'> *</sup> </p>
           <input className='w-full outline-none bg-[#2C333F] rounded-[0.5rem] text-[#afb2bf] p-[12px] border-b border-[#AFB2B1]'
           required
           type={showPassword2 ?'text':'password'}
           id="coPassword"
           value={FormData.confirm_password}
           onChange={changeHandler}
           name='confirm_password'
           placeholder='Confirm Password'/>
           <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
            setPassword2(!showPassword2)
       }}>{ showPassword2 ?<IoEyeOutline fontSize={24} fill='#AFB2BF'/> :<IoEyeOffOutline fontSize={24} fill='#AFB2BF'/>}</span></label>
            </div>
          
           <button className='w-full cursor-pointer bg-yellow-300 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-8'>Create Account</button> 
        </form>
    </div>
  )
}

export default SignupForm