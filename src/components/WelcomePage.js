import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`;

export default function WelcomePage() {
  return (
    <StyledSection className="welcome-page">
      <header>
        <h1>Welcome to the Ultimate Fan Site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </StyledSection>
  );
}
