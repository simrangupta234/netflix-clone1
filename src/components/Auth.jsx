/* eslint-disable no-unused-vars */
import React from 'react'

const Auth = () => {

  var isLoggedIn = true;

  const login = () => {
    var a = new Array();
    var up1 = new Object();
    var up2 = new Object();

    up1 = {
      name: "[abcd@gmail.com](mailto:abcd@gmail.com)",
      password: btoa("abc@12"),
    };

    up2 = {
      name: "[bcd@gmail.com](mailto:bcd@gmail.com)",
      password: btoa("bcd@12"),
    };
    a.push(up1);
    a.push(up2);

    var emailId = (document.getElementById("email") || {}).value || "";
    var psw = (document.getElementById("password") || {}).value || "";

    console.log(emailId);
    console.log(psw);

    sessionStorage.setItem("currentloggedin", emailId);

    localStorage.setItem("all_users", JSON.stringify(a));

    a = JSON.parse(localStorage.getItem("all_users"));

    a.push({ name: emailId, password: psw });

    localStorage.setItem("name", JSON.stringify(a));
  };

  var currentLoggedIn = sessionStorage.getItem("currentLoggedIn");
  if (currentLoggedIn) {
    isLoggedIn = true;
  }
  return (
    <div>
      
    </div>
  )
}

export default Auth
