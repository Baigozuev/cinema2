import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import FilmDetails from "../../component/FilmDetails";

const ActorDetails = () => {
  const [bio, setBio] = useState(false);
  const [details, setDetails] = useState({});
  let { actorId } = useParams();
  // console.log(actorId);
  // console.log(actorId);
  const getActerDetails = (key) => {
    axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US
  `).then((res) => {
      setDetails(res.data);
    });
  };
  useEffect(() => {
    getActerDetails(API_KEY);
  }, []);
  console.log(details);
  let {
    profile_path,
    place_of_birth,
    name,
    birthday,
    biography,
    also_known_as,
  } = details;
  return (
    <div id="actorDetails">
      <div className="container">
        <div className="actorDetails">
   {
    profile_path ? 
    <div>
       <img
            src={`	https://image.tmdb.org/t/p/w300_and_h450_bestv2//${profile_path}`}
            alt=""
          />
            </div>:
          <img
            src={`https://appleinsider.ru/wp-content/uploads/2023/09/wonderlust_wallpappers_head-750x485.png`}
            alt="img"
            width={350}
          />
   }
          <div className="actorDetails--content">
            <h1>{name}</h1>
            <h2>
              <span>Дата рождения:</span> &nbsp;
              {birthday}
            </h2>
            {place_of_birth?.length ? (
              <h2>
                <span>Место рождения:</span> &nbsp;
                {place_of_birth}
              </h2>
            ) : null}
            {biography?.length ? (
              <div>
                <h3>Биография</h3>
                <p>
                  {bio ? biography : biography?.slice(0, 200)}{" "}
                  {biography.length >= 200 ? (
                    <span onClick={() => setBio(!bio)}>
                      {!bio ? "more..." : "close..."}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            ) : null}
          </div>
        </div>
            <FilmDetails id={actorId}/>
      </div>
    </div>
  );
};

export default ActorDetails;
