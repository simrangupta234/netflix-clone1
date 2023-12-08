/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoute = (props) => {
  const [isLoggedIn ,setIsLoggedIn] = useState(props.isLoggedIn);

  console.log("isLoggedIn", isLoggedIn);

  return (
    isLoggedIn === true ? <Outlet/>: <Navigate to={"/"}/>
  )
}

export default PrivateRoute
