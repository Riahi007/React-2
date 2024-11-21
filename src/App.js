import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from "./PlayersList";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
