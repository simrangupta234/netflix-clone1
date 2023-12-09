/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import MovieHome from "./MovieHome";
import Login from "./Login";

const PrivateRoute = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setEmail,
    password,
    setPassword,
    setLoggedInValue,
  } = useAuth();

  const storedEmail1 = sessionStorage.getItem("inputUserEmail");
  const storedPassword2 = sessionStorage.getItem("inputUserPassword");
  console.log(storedEmail1);
  useEffect(() => {
    if (storedEmail1 != null && storedPassword2 != null) {
      setLoggedInValue(true);
    }
  }, []);


  return (
  <>
  {isLoggedIn ? <MovieHome /> : <Navigate to={"/"} />}
  {isLoggedIn? <Navigate to={"/user/movieHome"}/> : <Login/>}
  </>
  
  )
};
export default PrivateRoute;
