// import React from 'react'
import axios from "axios";
import "../style/editdb.css";
import { useState } from "react";

const EditDb = () => {
  const [movies, setMovies] = useState({
    id: 0,
    title: "",
    release_year: 0,
    duration: "",
    genre: "",
    overview: "",
    starring: "",
    poster: "",
    thumbnail: "",
    preview: [],

  });

  const handleFileChange = (event, field) => {
    const files = event.target.files;
    setMovies((prevMovies) => ({
      ...prevMovies,
      [field]: Array.from(files), // Always convert to an array
    }));
  };

  const addMovie = async () => {
    try {
      const formData = new FormData();
      formData.append("id", movies.id);
      formData.append("title", movies.title);
      formData.append("release_year", movies.release_year);
      formData.append("duration", movies.duration);
      formData.append("genre", movies.genre);
      formData.append("overview", movies.overview);
      formData.append("poster", movies.poster);
      formData.append("thumbnail", movies.thumbnail);
  
      // Append each file in the 'preview' array individually
      movies.preview.forEach((file, index) => {
        formData.append(`preview${index + 1}`, file);
      });
  
      const response = await axios.post(
        "http://localhost:3001/api/movies",
        formData
      );
  
      setMovies({
        id: response.data.id,
        title: response.data.title,
        release_year: response.data.release_year,
        duration: response.data.duration,
        genre: response.data.genre,
        overview: response.data.overview,
        poster: response.data.poster,
        thumbnail: response.data.thumbnail,
        preview: response.data.preview,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };
  

  return (
    <div className="db bg-light d-flex justify-content-center align-items-center flex-column text-center p-3">
      <h2> Edit DataBase</h2>

      <form className="dbform d-flex justify-content-center align-items-center flex-column text-start">
        {/* <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={movies.category}
          onChange={(e) => {
            setMovies({ ...movies, category: e.target.value });
          }}
        /> */}

        <label htmlFor="id">Movie Number</label>
        <input
          type="number"
          name="id"
          id="id"
          onChange={(e) => {
            setMovies({ ...movies, id: e.target.value });
          }}
        />

        <label htmlFor="title">Movie Name</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => {
            setMovies({ ...movies, title: e.target.value });
          }}
        />

        <label htmlFor="relase_year"> Release Year</label>
        <input
          type="number"
          name="release_year"
          id="release_year"
          onChange={(e) => {
            setMovies({ ...movies, release_year: e.target.value });
          }}
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          name="duration"
          id="duration"
          onChange={(e) => {
            setMovies({ ...movies, duration: e.target.value });
          }}
        />

        <label htmlFor="genre"> Genre </label>
        <input
          type="text"
          name="genre"
          id="genre"
          onChange={(e) => {
            setMovies({ ...movies, genre: e.target.value });
          }}
        />

        <label htmlFor="overview"> Overview</label>
        <input
          type="text"
          name="overview"
          id="overview"
          onChange={(e) => {
            setMovies({ ...movies, overview: e.target.value });
          }}
        />

        <label htmlFor="poster"> Poster</label>
        <input
          type="file"
          accept="image/jpg, image/png, image.jpeg"
          name="poster"
          id="poster"
          onChange={(e) => handleFileChange(e, "poster")}
        />

        <label htmlFor="thumbnail"> Thumbnail</label>
        <input
          type="file"
          accept="image/jpg, image/png, image.jpeg"
          name="thumbnail"
          id="thumbnail"
          onChange={(e) => handleFileChange(e, "thumbnail")}
        />

        <label htmlFor="preview"> Preview Images</label>
        <input
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          name="preview"
          id="preview"
          multiple="multiple"
          onChange={(e) => handleFileChange(e, "preview")}
        />
      </form>

      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default EditDb;
