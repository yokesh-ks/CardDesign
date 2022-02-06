import React from "react";
import styled from "styled-components";

const CardStack = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default CardStack;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
