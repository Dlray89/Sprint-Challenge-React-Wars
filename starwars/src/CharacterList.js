import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        const Cinfo = res.data.results;
        console.log(res.data.results);
        setdata(Cinfo);
      })
      .catch(error => {
        console.log("an error has happen", error);
      });
  }, []);

  return (
    <div>
      {data.map(SWC => {
        return <CharacterCard SWC={SWC} key={SWC.created} name={SWC.name} height={SWC.height} mass={SWC.mass} birth_year={SWC.birth_year} homeworld={SWC.homeworld}/>;
      })}
    </div>
  );
}
