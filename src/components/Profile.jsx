// import React from 'react'
import profileImg from "../assets/profilePicture.png";
import "../style/profile.css";
import { useEmail } from "./EmailContext";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const { email } = useEmail();

  useEffect(() => {
    let profilePic = document.getElementById("profile-pic");
    let inputpic = document.getElementById("photo");

    inputpic.onchange = function () {
      profilePic.src = URL.createObjectURL(inputpic.files[0]);
    };

    axios.get("http://localhost:3001/api/users").then((response) => {
      console.log(response.data);
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-page d-flex flex-column">
      <div className="profile-nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex text-light justify-content-center align-items-center w-100">
          <div className=" profileCard m-3  p-5 w-25">
            <img src={profileImg} alt="" id="profile-pic" />
            <label htmlFor="photo">Upload Photo</label>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              name="photo"
              id="photo"
            />
            <hr />
            <div className="d-flex justify-content-center align-items-center ">
              <p className=" w-auto pe-2">Email:</p>
              <p className="w-auto">user@gmail.com{email}</p>
            </div>
          </div>

          <div className="infoCard d-flex flex-column  w-75  m-3 p-5">
            <h2>General Information</h2>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div>
              <label htmlFor="dob">Date Of Birth</label>
              <input type="date" name="dob" id="dob" />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label htmlFor="no">Contact Number</label>
              <input type="number" name="no" id="no" />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" />
            </div>
          </div>
        </div>
        <button type="submit">Save Changes</button>
      </form>

      <div className="admin mt-5 text-light p-5">
        <div>
          <p>Number of User: </p>
          <p>20</p>
        </div>

        <Link to="/editdb">
          <button>Update Database</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
