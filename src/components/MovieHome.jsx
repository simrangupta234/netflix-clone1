/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import MovieList from "./MovieList";
import axios from "axios";
import symbol from "../assets/netflix_symbol.png";
import logo from "../assets/logo.svg";
import Footer from "./Footer";
import "../style/moviehome.css";

const MovieHome = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  // const number = useRef();
  // const [isLoggedIn ,setIsLoggedIn] =useState(props);
  const [currentloggedin, setCurrentloggedin] = useState("");
  // var inputUserEmail = localStorage.getItem("userEmail");
  // var inputUserPassword = localStorage.getItem("userPassword");
  const [inputUserEmail, setInputUserEmail] = useState(
    localStorage.getItem("userEmail")
  );
  const [inputUserPassword, setInputUserPassword] = useState(
    localStorage.getItem("userPassword")
  );
  // const [isLoggedIn ,setIsLoggedIn] = useState(props.isLoggedIn);
  // var isLoggedIn = props.isLoggedIn;
  console.log("isLoggedIn:-", isLoggedIn);

  const handleSiginClick = () => {
    sessionStorage.clear();
    isLoggedIn = false;
    // setIsLoggedIn(false)
    localStorage.setItem("users", localStorage.getItem(inputUserEmail));
    localStorage.setItem(
      "userspassword",
      localStorage.getItem(inputUserPassword)
    );
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
  };
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

    var emailId =
      (document.getElementsByClassName("emailId") || {}).value || "";
    var psw = (document.getElementsByClassName("psw") || {}).value || "";

    console.log(emailId);
    console.log(psw);

    setCurrentloggedin(sessionStorage.setItem("currentloggedin", emailId));

    localStorage.setItem("all_users", JSON.stringify(a));

    a = JSON.parse(localStorage.getItem("all_users"));

    a.push({ name: emailId, password: psw });

    localStorage.setItem("name", JSON.stringify(a));
  };

  let randomMovie = Math.floor(Math.random() * 20);

  const handleOnClick = (index) => {
    randomMovie = index;
    console.log("index", randomMovie);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=8f003ce108004712f54fccae5f9d1692"
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  console.log(movies);

  return (
    <div className="movie-main w-100 text-light d-flex flex-column justify-content-center align-items-center">
      <div className="header-movie d-flex flex-row justify-content-between align-items-center bg-black text-light  ">
        <a
          className="logom"
          href="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <img
            src={logo}
            style={{ height: "55px", width: "130px" }}
            alt="logo"
          />
        </a>
        <a
          className="symbolm"
          href="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <img
            src={symbol}
            style={{ height: "55px", width: "auto" }}
            alt="logo"
          />
        </a>

        <div className="header-movie-right d-flex justify-content-center align-items-center w-auto">
          <div className="textm" style={{ fontSize: "13px" }}>
            UNLIMITED TV SHOWS & MOVIES
          </div>

          <button className="btnm">
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              JOIN NOW
            </a>
          </button>

          {isLoggedIn === true ? (
            <button
              className="btnm"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #888",
              }}
              onClick={handleSiginClick}
            >
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                Sign out
              </a>
            </button>
          ) : (
            <button
              className="btnm"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #888",
              }}
            >
              <a
                href="/signin"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign In
              </a>
            </button>
          )}
        </div>
      </div>

      <div className="style">
        <div className="stylediv">
          <div>
            <p>
              <img src={symbol} alt="" style={{ height: "5%", width: "5%" }} />{" "}
              Film
            </p>
            <h1>{movies[randomMovie]?.title}</h1>

            <h3>{movies[randomMovie]?.title}</h3>
            <p style={{ color: "#a3a3a3" }}>
              {movies[randomMovie]?.release_date}
            </p>
            <p>{movies[randomMovie]?.overview}</p>
          </div>
          <div></div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center justify-content-between align-items-center w "
        style={{
          position: "relative",
          height: "60px",
          width: "90%",
        }}
      >
        <div className="joinnowbox ">
          <img src={symbol} alt="" />
          <div className="joinnowm">
            <div>Watch all you want.</div>

            <button className="btnm">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                Join Now
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="row movieList-all p-4">
        <h2>More Like This</h2>
        {movies.map((movie, index) => (
          <a
            className="col-lg-4 col-sm-6 p-3 text-decoration-none"
            key={index}
            onClick={handleOnClick(index)}
            href="/moviehome"
          >
            <img
              className=" img-fluid object-fit-cover "
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
            />
            <p style={{ marginTop: "-60px", color: "red" }}>{movie?.title}</p>
          </a>
        ))}
      </div>
      <Footer />

      {/* <div className="movielist-one  position-relative"
      // style={{background:"linear-gradient(to right, black,white)"}}
      >
        <img
          className=" object-fit-cover w-100" 
          src={`https://image.tmdb.org/t/p/original/${movies[randomMovie]?.backdrop_path}`}
          alt=""
        />
        <div className="row-fluid position-absolute">
          <div style={{ marginTop: "-500px" , paddingLeft:"80px" }} className="col-6">
            <h1>{movies[randomMovie]?.title}</h1>
            <p>{movies[randomMovie]?.release_date}</p>
            <p>{movies[randomMovie]?.overview}</p>
          </div>
          <div className="col-6"></div>
        </div>

        <div className="row movieList-all p-4">
          <h2>More Like This</h2>
          {movies.map((movie, index) => (
            <a
              className="col-4 p-3 text-decoration-none"
              key={index}
              onClick={handleOnClick(index)}
              href="/moviehome"
            >
              <img
                className=" img-fluid object-fit-cover "
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt=""
              />
              <p style={{ marginTop: "-60px", color: "red" }}>{movie?.title}</p>
            </a>
          ))}
        </div> 
      </div>*/}
    </div>
  );
};
export default MovieHome;
