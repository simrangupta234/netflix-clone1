// import React from 'react'
import "../style/profile.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const id = localStorage.getItem("UserId");
  const [userCount, setUserCount] = useState(0);
  const [name, setName] = useState("");
  const [dob, setDob] = useState(0/0/0);
  const [address, setAddress] = useState("");
  const [no, setNo] = useState(0);
  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    let profilePic = document.getElementById("profile-pic");
    let inputpic = document.getElementById("photo");

    inputpic.onchange = function () {
      profilePic.src = URL.createObjectURL(inputpic.files[0]);
    };

    axios.get(`http://localhost:3001/api/users/${id}`).then((response) => {
      setUser(response.data);
    });

    axios.get("http://localhost:3001/api/users").then((response) => {
      setUserCount(response.data.length);
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/api/users/${id}`,
        {
          email: user.email,
          password: user.password,
          name: name,
          dob: dob,
          no: no,
          address: address,
          gender: gender,
          profilePic: profilePic,
        }
      );
      console.log("response", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-page d-flex flex-column">
      <div className="profile-nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        action="/profiles"
        method="PUT"
        encType="multipart/form-data"
      >
        <div className="card-div d-flex text-light justify-content-center align-items-center w-100">
          <div className="profileCard m-3  p-5 w-25">
            <img
              src={`http://localhost:3001${user.profilePic}`}
              alt=""
              id="profile-pic"
            />
            <label htmlFor="photo">Upload Photo</label>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              name="photo"
              id="photo"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            />
            <hr />
            <div className="d-flex flex-column  justify-content-center align-items-center ">
              <p className=" w-auto pe-2 fw-light lh-base">Email:</p>
              <p className="w-auto ">{user.email}</p>
            </div>
          </div>

          <div className="infoCard d-flex flex-column  w-75  m-3 p-5">
            <h2>General Information</h2>

            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name || user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={dob || user.dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                value={gender || user.gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label htmlFor="no">Contact Number</label>
              <input
                type="number"
                name="no"
                id="no"
                value={no || user.no}
                onChange={(e) => setNo(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={address || user.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Save Changes
        </button>
      </form>

      {user.role === "user" ? (
        <div className="admin mt-5 text-light p-5">
          <div>
            <p>Number of User: </p>
            <p>{userCount}</p>
          </div>

          <Link to="/editdb">
            <button>Update Database</button>
          </Link>
        </div>
      ) : (
        <div className="admin mt-5 text-light p-5 d-none">
          <div>
            <p>Number of User: </p>
            <p>20</p>
          </div>

          <Link to="/editdb">
            <button>Update Database</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
