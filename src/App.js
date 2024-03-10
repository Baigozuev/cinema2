import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Popular from "./component/Popular";
import TopRetad from "./component/TopRetad";
import MovieDetails from "./pages/MovieDeatils";
import ActorDetails from "./pages/ActorDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/topRetad" element={<TopRetad />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/actorDetails/:actorId" element={<ActorDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
