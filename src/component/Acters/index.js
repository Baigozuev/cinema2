import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { Link } from "react-router-dom";

const Acters = ({ id }) => {
  const [acter, setActer] = useState([]);
  const getActers = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setActer(res.data.cast);
    });
  };
  useEffect(() => {
    getActers(API_KEY);
  }, []);
  return (
    <div id="acters">
      <div className="container">
        <h1>Актёрский состав сериала</h1>
        <div className="acters">
          {acter.map((el) => (
            <div className="acters--content">
             <Link to={`/actorDetails/${el.id}`}>
             {el.profile_path ? (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`}
                    alt="img "
                    width={200}
                  />
                </div>
              ) : (
                <img
                  src={`https://klike.net/uploads/posts/2019-03/1551511801_1.jpg`}
                  alt="img"
                  width={300}
                />
              )}
             </Link>
              <h2>{el.name}</h2>
              <h3>{el.character}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acters;
