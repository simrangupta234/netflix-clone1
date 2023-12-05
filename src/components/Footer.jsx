// import React from "react";
const Footer = () => {
  return (
    <div className="footer-section p-5" style={{color:"#737373", backgroundColor:"#181818"}}>
    <p  style={{color:"#737373"}}>Questions? Call 000-800-919-1694</p>

    <div className="footer">
      <div className="footer-item">
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">FAQ</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Help Centre</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Account</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Media Centre</a>
        <br />
      </div>
      <div className="footer-item">
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Investor Relations</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Jobs</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">
          Ways to Watch
          <br />
        </a>
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Terms of Use</a>
        <br />
      </div>
      <div className="footer-item">
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Privacy</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Cookie Preferences</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Corporate Information</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Contact Us</a>
        <br />
      </div>
      <div className="footer-item">
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Speed Test</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Legal Notices</a>
        <br />
        <a  style={{color:"#737373", textDecoration:"none"}} href="/">Only on Netflix</a>
        <br />
     
      </div>
    </div>

    <div
      className="language"
      style={{
        borderRadius: "4px",
        border: "1px solid #737373",
        padding: "2px",
        width: "15%",
      }}
    >
      <label>
        <div className="select d-flex justify-content-center align-items-center bg-black">
          <i className="fa-solid fa-globe w-auto p-2"></i>

          <select name="lang" id="lang">
            <option value="English">English</option>
            <option value="Hindi">हिंदी</option>
          </select>
        </div>
      </label>
    </div>
    <p className="pt-3">Netflix India</p>
  </div>
  );
};
export default Footer;
