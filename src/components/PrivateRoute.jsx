

import React from 'react'
import { Navigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
function PrivateRoute({children}) {
    let [LoggedIn]=useOutletContext();
 if(LoggedIn){
    return children;
 }
 else{
    return <Navigate to="/login" />
 }
}

export default PrivateRoute