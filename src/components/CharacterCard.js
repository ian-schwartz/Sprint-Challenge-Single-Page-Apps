import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid lightblue;
  margin: 10px;
  padding: 10px;
  width: 33%;
`;

export default function CharacterCard(props) {
  console.log("props", props);
  return (
    <StyledDiv>
    <h1>{props.char.name}</h1>
    <p>Gender: {props.char.gender}</p>
    <p>Species: {props.char.species}</p>
    </StyledDiv>
  );
};
