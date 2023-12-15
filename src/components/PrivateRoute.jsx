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
      {/* {isLoggedIn ? <MovieHome /> : <Navigate to={"/"} />}
      {isLoggedIn ? <Navigate to={"/user/movieHome"} /> : <Login />} */}

      {hasJWT() ? <MovieHome /> : <Login />}
    </>
  );
};
export default PrivateRoute;
