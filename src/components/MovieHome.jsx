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

const MovieHome = (props) => {
  const [movies, setMovies] = useState([]);
  // const number = useRef();

  var isLoggedIn = false;
  var inputUserEmail = localStorage.getItem("userEmail");
  var inputUserPassword = localStorage.getItem("userPassword");
  if (inputUserEmail && inputUserPassword) {
    isLoggedIn = true;
  }
  // const { isLoggedIn } = props;
  const handleSiginClick = () => {
    // localStorage.clear();
    isLoggedIn=false;
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

          {isLoggedIn ? (
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
