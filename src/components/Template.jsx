

import React, { useState } from 'react'
import LoginForm from '../form/LoginForm.jsx';
import SignupForm from '../form/SignupForm.jsx';
import { FcGoogle } from 'react-icons/fc';


function Template(props) {
  let type=props.type;
  let setisLoggedIn=props.setisLoggedIn;
  return (
    <>
    <div className='flex w-11/12 max-w-[1160px] py-12  mx-auto gap-x-12 gap-y-0 justify-between '>
    <div className='mx-auto w-11/12 max-w-[450px] md:mx-0'>
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-white">{props.heading1}</h1>
        {type=='signup' && <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-white">{props.heading2}</h1>}
         <p className='mt-4 text-[1.125rem] leading-[1.625rem]'>
          <span className='text-[#AFB2B1]'>{props.p1}</span><br/>
          <span className='text-[#47A5C5]  font-edu-sa font-bold italic text-base'>{props.p2}</span>
         </p>
         {type=='login' ?<LoginForm  setisLoggedIn={setisLoggedIn}/> :<SignupForm />}
         {type==='login' && <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='w-full h-[1px] bg-[#afb2bf]'></div>
          <p className='text-[#afb2bf] font-medium leading[1.375rem]'>OR</p>
          <div className='w-full h-[1px] bg-[#afb2bf]'></div>
         </div>}
        { type==='login' && <button className='w-full rounded-[8px] flex justify-center items-center font-medium text-[#AFB2B1] border  border-[#212834]  px-[12px] py-[8px] gap-x-2 mt-6 cursor-pointer'>
          <FcGoogle />
          <p>Sign in with Google</p>
         </button>}
    </div>

    <div className='relative w-11/12 max-w-[450px]'>
      <img src={props.frameimg}
      alt="Pattern"
      width={558}
      height={504}
      loading='lazy'/>
      
      <img src={props.loginimg}
      alt="Pattern"
      width={558}
      height={490}
      loading='lazy'
      className='absolute -top-4 right-4'/>
    </div>

    </div>
    </>
  )
}

export default Template