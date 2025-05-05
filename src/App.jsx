import React, { useState } from "react"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
function App() {
  const [loggedIn,setisLoggedIn]=useState(false);

  return (
    <>
     <div className='w-screen h-screen bg-[#000814] flex flex-col bg-richblack-900'>
      <Navbar loggedIn={loggedIn} setisLoggedIn={setisLoggedIn}/>
      <Outlet context={[setisLoggedIn,loggedIn]}/>
     </div>
    </>
  )
}

export default App
