import React from "react";
import styled from "styled-components";
import Layout from "./layout";

const Header = () => {
  return (
    <MainHeader>
      <Layout>
        <Nav>
          <Title>Card Design</Title>
        </Nav>
      </Layout>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #323232;
  width: 100%;
  height: 100px;
  z-index: 10;
`;

const Nav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 300;
  color: #fa4eab;
`;
