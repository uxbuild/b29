import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components

import Navigation from "./components/Navigation";
import PlayersList from "./components/PlayersList";
import PlayerDetails from "./components/PlayerDetails";
import NewPlayer from "./components/NewPlayer";
import Lost from "./components/Lost";
import Welcome from "./components/Welcome";
//css
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  return (
    <div id="" className="app">
      {/* <h2>Puppy Bowl</h2> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Welcome />} />
          <Route path="/players" element={<PlayersList />} />
          <Route path="/players/:id" element={<PlayerDetails />} />
          <Route path="/newplayer" element={<NewPlayer />} />
          <Route path="*" element={<Lost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
