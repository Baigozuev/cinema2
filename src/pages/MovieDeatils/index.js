import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiHeart } from "react-icons/hi";
import { GrBookmark } from "react-icons/gr";
import { GrRadial } from "react-icons/gr";
import Acters from "../../component/Acters";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  let { movieId } = useParams();
  // https://api.themoviedb.org/3/movie/${movieId}?api_key=api&language=en-US
  const getDetails = (key) => {
    axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US
    `).then((res) => setDetails(res.data));
  };
  useEffect(() => {
    getDetails(API_KEY);
  }, []);
  console.log(details);
  let {
    title,
    poster_path,
    release_date,

    genres,
    backdrop_path,

    tagline,
    vote_average,
    homepage,
    overview,
    runtime,
  } = details;
  return (
    <div>
      <div
        id="details"
        style={{
          background: `linear-gradient(to right, rgba(12, 6, 6, 0.631) calc((50vw - 170px) - 340px), rgba(8, 3, 3, 0.607) 50%, rgba(8, 3, 3, 0.592) 100%), url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})no-repeat center/cover fixed`,
          minHeight: "55vh",
        }}
      >
        <div className="container">
          <div className="details">
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
              alt="img"
              width={350}
            />
            <div className="details--content">
              <h1>
                {title} ({release_date?.slice(0, 4)})
              </h1>
              <div className="details--content__tittle">
                <h2>{release_date?.split("-").join("/")} (US)</h2>

                <div className="details--content__tittle--genres">
                  {genres?.map((el) => (
                    <h4>{el.name},</h4>
                  ))}
                </div>
                <h2>
                  {Math.floor(runtime / 60)}h {runtime % 60}min
                </h2>
              </div>
              <div className="details--content__icons">
                <div
                  className="details--content__icons--vote"
                  style={{
                    background:
                      vote_average * 10 >= 80
                        ? "yellow"
                        : vote_average * 10 >= 50
                        ? "green"
                        : "red",
                  }}
                >
                  <h3>{Math.round(vote_average * 10)} %</h3>
                </div>
                <div className="details--content__icons--icon">
                  <a href="#">
                    <TfiMenuAlt />
                  </a>
                </div>
                <div className="details--content__icons--icon">
                  <a href="#">
                    <HiHeart />
                  </a>
                </div>
                <div className="details--content__icons--icon">
                  <a href="#">
                    <GrBookmark />
                  </a>
                </div>
                <div className="details--content__icons--icon">
                  <a href="#">
                    <GrRadial />
                  </a>
                </div>
              </div>
              <h5>
                <i>{tagline}</i>
              </h5>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <Acters id={movieId}/>
    </div>
  );
};

export default MovieDetails;
