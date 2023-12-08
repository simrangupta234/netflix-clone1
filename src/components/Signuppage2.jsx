/* eslint-disable no-unused-vars */
// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/signuppage2.css";
import { useEmail } from "./EmailContext";
import { useFormik } from "formik";
import { useState } from "react";

function Signuppage2({ isLoggedIn }) {
  const { email } = useEmail();
  // eslint-disable-next-line no-unused-vars
  const [password, setPasswordValue] = useState("");

  // var inputUserEmail = localStorage.getItem("userEmail");
  // var inputUserPassword = localStorage.getItem("userPassword");
  const [inputUserEmail, setInputUserEmail] = useState(
    localStorage.getItem("userEmail")
  );
  const [inputUserPassword, setInputUserPassword] = useState(
    localStorage.getItem("userPassword")
  );
  // const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  // var isLoggedIn =    props.isLoggedIn;
  // console.log("isLoggedIn", isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  const handleSiginClick = () => {
    sessionStorage.clear();
    isLoggedIn = false;
    // setIsLoggedIn(false)
    localStorage.setItem("users", inputUserEmail);
    localStorage.setItem("userspassword", inputUserPassword);
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    console.log("users:-", localStorage.setItem("users", inputUserEmail));
  };

  const navigate = useNavigate();

  const login = () => {
    var a = new Array();
    var ep1 = new Object();
    var ep2 = new Object();

    ep1 = {
      name: "[abcd@gmail.com](mailto:abcd@gmail.com)",
      password: btoa("abc@12"),
    };

    ep2 = {
      name: "[bcd@gmail.com](mailto:bcd@gmail.com)",
      password: btoa("bcd@12"),
    };
    a.push(ep1);
    a.push(ep2);

    var emailId = (document.getElementById("email") || {}).value || "";
    var psw = (document.getElementById("password") || {}).value || "";

    console.log("email", emailId);
    console.log("passwod", psw);

    sessionStorage.setItem("currentloggedin", emailId);

    localStorage.setItem("all_users", JSON.stringify(a));

    a = JSON.parse(localStorage.getItem("all_users"));

    a.push({ name: emailId, password: psw });

    localStorage.setItem("name", JSON.stringify(a));
  };

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Pasword is required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(
        values.password
      )
    ) {
      errors.password =
        "Password should contain at least 8 digits , a capital latter, a small latter and a special character.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      validateSubmit(values);
    },
  });

  const validateSubmit = (values) => {
    const errors = validate(values);

    if (Object.keys(errors).length === 0) {
      localStorage.setItem("userPassword", values.password);
      navigate("/plans");
    } else {
      console.log("Please fill in the password");
    }
  };

  const handleChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleValue = (passwordValue) => {
    console.log("Password value:", passwordValue);
  };
  return (
    <div className="signup-main d-flex flex-column justify-content-center align-items-center w-100 bg-light">
      <div
        className="header d-flex justify-content-center align-items-center  "
        style={{ height: "100wh" }}
      >
        <div
          className="logo col-10"
          style={{
            color: "red",
            fontSize: "50px",
            fontWeight: "700",
          }}
        >
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="signin col-2">
          {isLoggedIn ? (
            <a
              href="/signin"
              style={{ textDecoration: "none", color: "#333" }}
              onClick={handleSiginClick}
            >
              Sign Out
            </a>
          ) : (
            <a href="/" style={{ textDecoration: "none", color: "#333" }}>
              Sign In
            </a>
          )}
          {console.log(isLoggedIn)}
        </div>
        <br />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        id="animation2"
        className="signuppage2 m-5 "
      >
        <p>STEP 1 OF 3</p>
        <h1>Create a password to start your membership</h1>
        <p>
          Just a few more steps and you&apos;re done! We hate paperwork, too.
        </p>
        <div className="wrapper-input2 d-flex align-items-center w-100 mt-3 mb-3">
          <div className="input-data d-flex  flex-column align-items-center  ">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder=""
              readOnly={true}
            />

            <label htmlFor="email" style={{ color: "#333" }}>
              Email
            </label>
          </div>
        </div>
        <div className="wrapper-input2 d-flex align-items-center w-100 mt-3 mb-5">
          <div className="input-data d-flex  flex-column align-items-center ">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                formik.handleChange(e);
                handleChange(e);
                handleValue(e.target.value);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder=""
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            />
            {formik.touched.password && formik.errors.password ? (
              <span
                style={{
                  textAlign: "start",
                  color: "rgb(235, 57, 66)",
                  fontSize: "12px",
                  paddingLeft: "16px",
                }}
              >
                {formik.errors.password}
              </span>
            ) : null}
            <label htmlFor="password" style={{ color: "#333" }}>
              Add a password
            </label>
          </div>
        </div>

        <button
          className="btn text-light"
          type="submit"
          onClick={login()}
          style={{
            backgroundColor: "red",
            marginBottom: "100px",
            borderRadius: "4px",
            fontSize: "24px",
            fontWeight: "400",
            padding: "18px 40px",
          }}
        >
          Next
        </button>
      </form>

      <div className="footer-section2 p-5">
        <p>Questions? Call 000-800-919-1694</p>

        <div className="footer2">
          <div className="footer-item">
            <a href="/">FAQ</a>
            <br />
            <a href="/">Privacy</a>
            <br />
          </div>
          <div className="footer-item">
            <a href="/">Help Center</a>
            <br />

            <a href="/">Cookie Preferences</a>
            <br />
          </div>
          <div className="footer-item">
            <a href="/">Netflix Shop</a>
            <br />
            <a href="/">Corporate Information</a>
            <br />
          </div>
          <div className="footer-item">
            <a href="/">Term of use</a>
            <br />
          </div>
        </div>
        <div
          className="language"
          style={{
            borderRadius: "4px",
            border: "1px solid #737373",
            padding: "6px 5px",
            width: "15%",
          }}
        >
          <label>
            <div className=" d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-globe w-auto p-2"></i>

              <select
                style={{
                  backgroundColor: "transparent",
                  color: "#333",
                  textDecoration: "none",
                  borderRadius: "2px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginLeft: "-30px",
                  paddingLeft: "30px",
                }}
                name="lang"
                id="lang"
              >
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
              </select>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Signuppage2;
