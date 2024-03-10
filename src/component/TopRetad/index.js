import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";

const TopRetad = () => {
  const [count, setCount] = useState(1);
  const [topRetad, setTopRerad] = useState([]);
  const geteTopRetad = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${count}`
    ).then((res) => {
      setTopRerad(res.data.results);
    });
  };
  useEffect(() => {
    geteTopRetad(API_KEY);
  }, [count]);
  console.log(topRetad);
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {topRetad.map((el) => (
            <MovieCard movie={el} />
          ))}
        </div>
        <div className="topRetad-btn">
          <button
            onClick={() => setCount(count > 1 ? count - 1 : count)}
            className="topRetad-Left"
          >
            Prev
          </button>
          <h1>{count}</h1>
          <button
            onClick={() => setCount(count + 1)}
            className="topRetad-Right"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRetad;
