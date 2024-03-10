import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";

const Popular = () => {
  const [acter, setActor] = useState([]);
  const [count, setCount] = useState(1);
  const getPopular = (key) => {
    window.scroll(0, 0);setActor([])
    setTimeout(() => {
      axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${count}`
      ).then((res) => {
        setActor(res.data.results);
      });
    }, [1000]);
  };
  useEffect(() => {
    getPopular(API_KEY);
  }, [count]);
  console.log(acter);
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {acter.map((el) => (
            <MovieCard movie={el} />
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => setCount(count > 1 ? count - 1 : count)}
            className="pagination-Left"
          >
            Prev
          </button>
          <h1>{count}</h1>
          <button
            onClick={() => setCount(count + 1)}
            className="pagination-Right"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
