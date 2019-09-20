import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: lightblue
`;

export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </StyledHeader>
  );
}
