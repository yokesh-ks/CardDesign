import React from "react";
import Layout from "./components/layout";
import Design1 from "./containers/Design1";
import Header from "./components/Header";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Layout>
          <Design1 />
        </Layout>
      </Main>
    </>
  );
};

export default App;

const Main = styled.main`
  margin-top: 80px;
`
