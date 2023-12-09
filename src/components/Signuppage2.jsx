/* eslint-disable no-unused-vars */
// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/signuppage2.css";
import { useEmail } from "./EmailContext";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

function Signuppage2() {
  const { email, setEmailValue } = useEmail();
  const { isLoggedIn, setLoggedInValue, password, setPassword, setAuthValue } =
    useAuth();

    const storedEmail1 = sessionStorage.getItem("inputUserEmail");
    const storedPassword2 = sessionStorage.getItem("inputUserPassword");
    console.log(storedEmail1);
    useEffect(() => {
      if (storedEmail1 != null && storedPassword2 != null) {
        setLoggedInValue(true);
      }
    }, []);

  const signOut = (e) => {
   
    sessionStorage.removeItem("inputUserEmail");
    sessionStorage.removeItem("inputUserPassword");
    setLoggedInValue(false);
    navigate("/login")
  };

  const handleChange = (e) => {
    setAuthValue(e.target.value);
  };
  console.log("password: ", password);

  const navigate = useNavigate();

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
      localStorage.setItem("inputUserPassword", values.password);
      navigate("/plans");
    } else {
      console.log("Please fill in the password");
    }

    const storedUsername2 = localStorage.getItem("inputUserEmail");
    const storedPassword3 = localStorage.getItem("inputUserPassword");

    sessionStorage.setItem("inputUserEmail", storedUsername2);
    sessionStorage.setItem("inputUserPassword", storedPassword3);
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
              style={{ textDecoration: "none", color: "#333" ,border:"none"}}
              onClick={(e) => {
                signOut(e);
              }}
            >
              Sign Out
            </a>
          ) : (
            <a href="/" style={{ textDecoration: "none", color: "#333" }}>
              Sign In
            </a>
          )}
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
