import React from "react";
import "./App.css";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <CharacterList />
      <CharacterCard />
    </div>
  );
};

export default App;
