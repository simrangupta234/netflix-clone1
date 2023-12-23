// import React from 'react'
import symbol from "../assets/netflix_symbol.png";
import "../style/home.css";
import movieHeist from "../assets/moneyHeist.jpg";
import Footer from "./Footer";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profileImg from "../assets/profilePicture.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "10",
        position: "absolute",
        right: "40px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "10", left: "40px" }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // tokenValidation();
    axios.get("http://localhost:3001/api/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="movie-main w-100 text-light d-flex flex-column justify-content-center align-items-center">
      <div
        className="style"
        style={{
          background: `url(${movieHeist})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="homenav">
          <div className="profile">
            <Link to="/profile">
              {/* <button className="profile">Profile</button> */}
              <img src={profileImg} alt="" />
            </Link>
          </div>
        </div>
        {/* {localStorage.getItem("AdminEmail") ===
        "simrangupta172002@gmail.com" ? (
          <div className="homenav d-block">
            <Link to="/editdb">
              <button className="Adminbtn">Admin</button>
            </Link>
          </div>
        ) : (
          <div className="homenav d-none"></div>
        )} */}

        <div className="stylediv2">
          <div style={{ marginTop: "-110px" }}>
            <p>
              <img src={symbol} alt="" style={{ height: "5%", width: "5%" }} />
              Film
            </p>
            <h1>Money Heist</h1>

            <h3>Money Heist</h3>
            <p style={{ color: "#a3a3a3" }}>2000</p>

            <div>
              <button className="play">Play</button>
              <button className="trailer">Watch Trailer</button>
            </div>
          </div>
        </div>
      </div>

      <div className=" calousel d-flex  flex-column justify-content-center align-items-center  pt-4 pb-4">
        <h2>Featured</h2>
        <Slider {...settings} style={{ position: "relative" }}>
          {movies.map((movie, index) => (
            <Link
              className="slider-card"
              key={index}
              to={`/moviehome/${movie._id}`}
            >
              <img
                src={`http://localhost:3001${movie?.poster}`}
                alt={movie.title}
              />
            </Link>
          ))}
        </Slider>
      </div>

      <div className=" calousel d-flex  flex-column justify-content-center align-items-center pt-4 pb-4">
        <h2>Trending Now</h2>
        <Slider {...settings} style={{ position: "relative" }}>
          {movies.map((movie, index) => (
            <a
              className="slider-card"
              key={index}
              href={`/moviehome/${movie._id}`}
            >
              <img src={`http://localhost:3001${movie?.poster}`} alt="" />
            </a>
          ))}
        </Slider>
      </div>

      <div className=" calousel d-flex  flex-column justify-content-center align-items-center  pt-4 pb-4">
        <h2>New Releases</h2>
        <Slider {...settings} style={{ position: "relative" }}>
          {movies.map((movie, index) => (
            <Link
              className="slider-card"
              key={index}
              to={`/moviehome/${movie._id}`}
            >
              <img src={`http://localhost:3001${movie?.poster}`} alt="" />
            </Link>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
