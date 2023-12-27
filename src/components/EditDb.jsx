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

  const handleFileChange = (e) => {
    const { name } = e.target;

    if (name === "poster") {
      console.log("poster called");
      movies.poster = e.target.files[0];
    } else if (name === "thumbnail") {
      console.log("thumnail called");

      movies.thumbnail = e.target.files[1];
    } else {
      for (var i = 2; i < 6; i++) {
        console.log("preview called", i);
        movies.preview[i - 2] = e.target.files[i];
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovies((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", movies.id);
    formData.append("title", movies.title);
    formData.append("release_year", movies.release_year);
    formData.append("duration", movies.duration);
    formData.append("genre", movies.genre);
    formData.append("overview", movies.overview);
    formData.append("testImage", movies.poster);
    formData.append("testImage", movies.thumbnail);
    movies.preview.forEach((file) => {
      formData.append("testImage", file);
    });
    console.log("formData", ...formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/movies",
        formData,
        {
          headers: "multipart/form-data",
        }
      );

      console.log("formData", ...formData);
      console.log("response data", response.data);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <div className="db bg-light d-flex justify-content-center align-items-center flex-column text-center p-3">
      <h2> Edit DataBase</h2>

      <form
        className="dbform d-flex justify-content-center align-items-center flex-column text-start"
        action="/assets"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label htmlFor="id">Movie Number</label>
        <input
          type="number"
          name="id"
          id="id"
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="title">Movie Name</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="relase_year"> Release Year</label>
        <input
          type="number"
          name="release_year"
          id="release_year"
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          name="duration"
          id="duration"
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="genre"> Genre </label>
        <input
          type="text"
          name="genre"
          id="genre"
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="overview"> Overview</label>
        <input
          type="text"
          name="overview"
          id="overview"
          onChange={(e) => handleInputChange(e)}
        />

        <label htmlFor="poster"> Poster</label>
        <input
          type="file"
          accept="image/*"
          name="poster"
          id="poster"
          onChange={(e) => handleFileChange(e)}
        />

        <label htmlFor="thumbnail"> Thumbnail</label>
        <input
          type="file"
          accept="image/*"
          name="thumbnail"
          id="thumbnail"
          onChange={(e) => handleFileChange(e)}
        />

        <label htmlFor="preview"> Preview Images</label>
        <input
          type="file"
          accept="image/*"
          name="preview"
          id="preview"
          multiple="multiple"
          onChange={(e) => handleFileChange(e)}
        />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default EditDb;
