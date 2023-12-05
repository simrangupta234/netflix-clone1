// import React from 'react'
import logo from "../assets/logo.svg";
import lock from "../assets/lock.png"
import { Link } from "react-router-dom";

function Pay() {
  return (
    <div className="bg-light d-flex flex-column justify-content-center align-items-center">
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
          <a href="/signin" style={{ textDecoration: "none", color: "#333" }}>
            Sign Out
          </a>
        </div>
        <br />
      </div>

      <div id="animation5" className=" d-flex flex-column justify-content-center align-items-center  w-50">
        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            margin: "15px 0",
          
           
          }}
        >
          <img src={lock} alt="" />
        </div>

        <p>STEP 3 OF 3</p>
        <h2>Choose how to pay</h2>
        <p style={{fontSize:"18px"}}>
          Your payment is encrypted and you can change your payment method at
          anytime.
        </p>
        <h3 style={{fontSize:"18px"}}>Secure for peace of mind.</h3>
        <h3 style={{fontSize:"18px"}}>Cancel easily online.</h3>

        <div className="card p-2 m-2">Credit or Debit Card</div>
        <div className=" card p-2 m-2">UPI Auto Pay</div>
        <Link to="/moviehome">
          <button
            className="btn text-light"
            style={{
              backgroundColor: "red",
              marginBottom: "100px",
              borderRadius: "4px",
              fontSize: "24px",
              fontWeight: "400",
              padding: "18px 0px",
            }}
          >
            Start Membership
          </button>
        </Link>
        <div />
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

export default Pay;