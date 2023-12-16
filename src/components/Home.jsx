// import React from 'react'
import symbol from "../assets/netflix_symbol.png";
import "../style/home.css";
import movieHeist from "../assets/moneyHeist.jpg";
import Footer from "./Footer";
import templete from "../assets/templete.jpg";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "10", position:"absolute" , right: "40px"}}
        onClick={onClick}
      />
    );
  }
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" ,  zIndex: "10", left:"40px"}}
        onClick={onClick}
      />
    );
  }
const Home = () => {
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
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
        </Slider>
      </div>

      <div className=" calousel d-flex  flex-column justify-content-center align-items-center">
        <h2>Trending Now</h2>
        <Slider {...settings} style={{position:"relative" }}>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
          <div className="slider-card">
            <img src={templete} alt="" />
          </div>
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
