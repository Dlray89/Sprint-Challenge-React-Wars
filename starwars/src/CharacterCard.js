import React from "react";
import styled from "styled-components";

const WrapperContainer = styled.div`
  color: black;
  background: grey;
  border-radius: 20px;
  width: 30%;
  height: 30%;
  border: solid 2px black;
  margin: 0 auto;
`;

const CharacterCard = SWC => {
  return (
    <WrapperContainer className="wrapper">
      <h1> Star Wars</h1>

      <p>Name: {SWC.name}</p>
      <img src={SWC.homeworld} alt="Character" />
      <p>Height: {SWC.height} </p>
      <p>Mass: {SWC.mass}</p>
      <p>Birthday {SWC.birth_year}</p>
    </WrapperContainer>
  );
};

export default CharacterCard;
