/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Login from "./Login";
import Home from "./Home";
import MovieHome from "./MovieHome";

const PrivateRoute = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setEmail,
    password,
    setPassword,
    setLoggedInValue,
  } = useAuth();

  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (accessToken) {
      setLoggedInValue(true);
    }
  }, []);

  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("accessToken") ? (flag = true) : (flag = false);

    return flag;
  }

  return (
    <>
      

      {hasJWT() ? <Home /> : <Login />}
      {/* {hasJWT() ? <MovieHome /> : <Login />} */}
    </>
  );
};
export default PrivateRoute;
