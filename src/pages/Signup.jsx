

import React from 'react'
import Template from '../components/Template'
import loginimg from '../assets/signup.webp';
import frameimg from '../assets/frame.png'
function Signup() {
 
              
  return (
    <Template loginimg={loginimg}
    frameimg={frameimg}
     type='signup'
     heading1='Sign Up'
     p1='Create a free account.'
      />
  )
}

export default Signup