import React from "react";
import CardStack from "../../components/cardStack";
import { Data } from "./data";
import CardDesign from "./cardDesign";
import styled from "styled-components";

const Design1 = () => {
  return (
    <Section>
      <CardStack>
        {Data.map((CardData) => (
          <CardDesign CardData={CardData} />
        ))}
      </CardStack>
    </Section>
  );
};

export default Design1;

const Section = styled.div`
  padding: 60px 0;
`
