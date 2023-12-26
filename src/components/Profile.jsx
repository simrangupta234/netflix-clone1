// import React from 'react'
import "../style/profile.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState("");
  const id = localStorage.getItem("UserId");
  const [userCount, setUserCount] = useState(0);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [no, setNo] = useState("");
  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState("");
  // const profile = "/profiles/";

  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${id}`).then((response) => {
      setUser(response.data);
    });

    axios.get("http://localhost:3001/api/users").then((response) => {
      setUserCount(response.data.length);
    });
  }, []);

  const handleProfileImg = (e) => {
    if (e.target.files) {
      console.log("inside", e.target.files);
      setProfilePic(e.target.files[0].name);
    }
    let profilePic = document.getElementById("profile-pic");
    let inputpic = document.getElementById("photo");

    inputpic.onchange = function () {
      profilePic.src = URL.createObjectURL(inputpic.files[0]);
    };
  };
  console.log("profilePic==>", profilePic);
  console.log("name==>", name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", profilePic || user.profilePic);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("name", name || user.name);
    formData.append("dob", dob || user.dob);
    formData.append("no", no || user.no);
    formData.append("address", address || user.address);
    formData.append("gender", gender || user.gender);
    try {
      const response = await axios.patch(
        `http://localhost:3001/api/users/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("formData", ...formData);
      console.log("profilePic inside--", profilePic);
      console.log("name inside--", name);
      alert("changes saved.");
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
        method="PATCH"
        encType="multipart/form-data"
      >
        <div className="card-div text-light justify-content-center align-items-center w-100">
          <div className="profileCard m-lg-3 m-md-1  m-sm-1  p-lg-2 p-md-2 p-sm-0">
            <img
              src={`http://localhost:3001${profilePic || user.profilePic}`}
              alt=""
              id="profile-pic"
              onChange={(e) =>
                setProfilePic("/profiles/" + e.target.files[0].name)
              }
            />
            <label htmlFor="photo">Upload Photo</label>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              name="photo"
              id="photo"
              onChange={(e) => {
                setProfilePic("/profiles/" + e.target.files[0].name );
                handleProfileImg(e);
              }}
              // value={profilePic || user.profilePic || ' '}
            />

            <hr />
            <div className="d-flex flex-column  justify-content-center align-items-center ">
              <p className=" w-auto pe-2 fw-light lh-base">Email:</p>
              <p className="w-auto text-break">{user.email}</p>
            </div>
          </div>

          <div className="infoCard d-flex flex-column m-lg-3 m-md-1  m-sm-1  p-lg-2 p-md-2 p-sm-0">
            <h2>General Information</h2>

            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name || user.name || " "}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={dob || user.dob || " "}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                value={gender || user.gender || " "}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label htmlFor="no">Contact Number</label>
              <input
                type="text"
                name="no"
                id="no"
                value={no || user.no || " "}
                onChange={(e) => setNo(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={address || user.address || " "}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit">Save Changes</button>
      </form>

      {user.role === "admin" ? (
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
