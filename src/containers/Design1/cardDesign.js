import React from "react";
import styled from "styled-components";

const CardDesign = ({ CardData }) => {
  console.log(CardData);
  return (
    <Card>
      <ImageContainer>
        <Image src={CardData?.image} alt={CardData?.title} />
      </ImageContainer>
      <Details>
        <Link href="#">
          <Title>{CardData.title}</Title>
        </Link>
        <Description>{CardData.description}</Description>
      </Details>
    </Card>
  );
};

export default CardDesign;

const Card = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  transition: 0.6s;
`;

const Details = styled.div`
  position: relative;
  padding: 50px 30px;
  margin: -100px 30px 0 30px;
  transition: all ease-in-out 0.3s;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 0 25px rgba(0, 0, 0, 0.1);
`;

const Link = styled.a`
  color: var(--color-links);
  text-decoration: none;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
`;

const Title = styled.h3`
  color: black;
  font-weight: 700;
  margin: 10px 0 15px 0;
  font-size: 22px;
  transition: ease-in-out 0.3s;
`;

const Description = styled.p`
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
`;
