// import React from 'react'
// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/loginpage2.css";

export default function Loginpage2() {
  // const [pwd, setPwd] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //reload the form on submit
  };
  return (
    <div className="main w-100 bg-light  ">
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
        <div
          className="signin col-2"
         
        >
          <a href="/signin" style={{ textDecoration: "none", color: "#333" }}>
            Sign In
          </a>
        </div>
        <br />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div style={{ textAlign: "start", maxWidth: "440px", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <p>STEP 1 OF 3</p>
            <p style={{ fontSize: "32px", fontWeight: "500" }}>Welcome back!</p>
            <p style={{ fontSize: "32px", fontWeight: "500" }}>
              Joining Netflix is easy.
            </p>
            <p style={{ fontSize: "18px" }}>
              Enter your password and you&apos;ll be watching in no time.{" "}
            </p>
            <p> Email </p>
            <p></p>
            <div className="wrapper-input2 d-flex align-items-center w-100">
              <div className="input-data d-flex  align-items-center ">
                <input type="password" name="password" id="" required />
                <label style={{color:"#333"}}>Enter your password</label>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <a href="/" style={{ textDecoration: "none", color: "#0071eb" }}>
                Forgot your password?
              </a>
            </div>

            <Link to="/moviehome">
              <button
                className="btn text-light"
                style={{
                  backgroundColor: "red",
                  marginBottom: "100px",
                  borderRadius: "4px",
                  fontSize: "24px",
                  fontWeight: "400",
                  padding: "18px 40px",
                }}
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>

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
