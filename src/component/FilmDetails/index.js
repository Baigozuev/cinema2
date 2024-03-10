import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { Link } from "react-router-dom";

const FilmDetails = ({ id }) => {
  const [film, setFilm] = useState([]);
  // https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US
  const getFilm = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setFilm(res.data.cast);
    });
  };
  useEffect(() => {
    getFilm(API_KEY);
  }, []);
  console.log(film);
  return (
    <div id="film">
      <div className="film">
        {film.map((el) => (
          <div className="film--read">
            <div className="film__img">
            <Link to={`/movieDetails/${el.id}`}>
            {el.poster_path ? (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2//${el.poster_path}`}
                    alt="img"
                    width={200}
                  />
                </div>
              ) : (
                <img
                  src={`https://lubok.club/otkr/uploads/posts/2023-08/1691258199_lubok-club-p-otkritki-na-temu-the-end-13.jpg`}
                  alt="img"
                  width={200}
                  height={300}
                />
              )}
            </Link>

                  </div>
              <h1>
                {el.title.length > 20
                  ? el.title.slice(0, 13) + "..."
                  : el.title}
              </h1>
              <h2>{el.release_date}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmDetails;
