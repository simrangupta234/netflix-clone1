// import React from 'react'
import symbol from "../assets/netflix_symbol.png";
import "../style/home.css";
import movieHeist from "../assets/moneyHeist.jpg";
import Footer from "./Footer";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useMovieDetail } from "./movieDetailContext";

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
  // const {setIdValue} = useMovieDetail();
  useEffect(() => {
    // tokenValidation();
    axios.get("http://localhost:3001/api/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  console.log(movies);

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
        <div className="stylediv2">
          <div>
            <p>
              <img src={symbol} alt="" style={{ height: "5%", width: "5%" }} />{" "}
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

      <div className=" calousel d-flex  flex-column justify-content-center align-items-center">
        <h2>More like this</h2>

        <Slider {...settings} style={{ position: "relative" }}>
          {movies.map((movie, index) => (
            <a className="slider-card" key={index} href={`/moviehome/${movie._id}`}>
              <img src={`http://localhost:3001${movie?.poster}`} alt="" />
            </a>
          ))}
        </Slider>
      </div>

      <div className=" calousel d-flex  flex-column justify-content-center align-items-center">
        <h2>Trending Now</h2>
        <Slider {...settings} style={{ position: "relative" }}>
          {movies.map((movie, index) => (
            <a className="slider-card" key={index} href={`/moviehome/${movie._id}`}>
              <img src={`http://localhost:3001${movie?.poster}`} alt="" />
            </a>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
