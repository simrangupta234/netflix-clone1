/* eslint-disable no-unused-vars */

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoute = () => {

    var isLoggedIn = false;
    var inputUserEmail = localStorage.getItem("userEmail");
    var inputUserPassword = localStorage.getItem("userPassword");
    if (inputUserEmail && inputUserPassword) {
      isLoggedIn = true;
    }
  return (
    isLoggedIn ? <Outlet/>: <Navigate to={"/"}/>
  )
}

export default PrivateRoute
