

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import logo from '../assets/logo.png';
function Navbar({loggedIn,setisLoggedIn}) {
  const navigate=useNavigate();
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
        {/* <Link to="./"><img src={logo} alt=""  width={160} height={32} /></Link> */}
        <h1 className='rounded-full text-black text-xl bg-white border-white w-8 h-8 flex justify-center items-center'>S</h1>
        <div>
            <ul className='flex gap-x-6 text-[#CFDDEA]'>
                <li><Link to="./">Home</Link></li>
                <li><Link to="./about">About</Link></li>
                <li><Link to="./contact">Contact</Link></li>
            </ul>
        </div>
        <div className='flex  items-center gap-x-4'>
           {!loggedIn && <Link to="./login"><button className='bg-[#161D29] text-[#AFB2B1] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#212834]'>Log in</button></Link> }
           {!loggedIn && <Link to="./signup"><button className='bg-[#161D29] text-[#AFB2B1] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#212834]'>Sign up</button></Link>}
           {loggedIn  && <button onClick={()=>{
            setisLoggedIn(false)
            navigate('/');
            toast.error("Logged Out");
            
            }} className='bg-[#161D29] text-[#AFB2B1] py-[8px] px-[12px] rounded-[8px] cursor-pointer border border-[#212834]'>Log Out</button>}
           {loggedIn&& <Link to="./dashboard"><button className='bg-[#161D29] text-[#AFB2B1] py-[8px] border px-[12px] rounded-[8px]  cursor-pointer border-[#212834]'>Dashboard</button></Link>}
           
        </div>
    </div>
  )
}

export default Navbar