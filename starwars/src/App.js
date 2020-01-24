import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CharacterCard from "./CharacterCard"; 

const App = () => {
  const [data, setData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    const fetchPpl = async props => {
      try {
        setData({ name: data.name, isFetching: true });
        const res = await axios.get("https://swapi.co/api/people/");
        setData({ name: res.data, isFetching: false });
      } catch (error) {
        console.log("An error has happen", error);
        setData({ name: data.name, isFetching: false });
      }
    };
    fetchPpl();
  }, [data.name]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard data={data} isFetching={data.isFetching} />
    </div>
  );
};

export default App;
