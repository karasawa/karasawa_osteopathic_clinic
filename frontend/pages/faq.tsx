import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import Layout from "../components/Layout";
import styled from "styled-components";
import { memo } from "react";
import BuckButton from "../components/atoms/BuckButton";
// eslint-disable-next-line react/display-name
const Faq: NextPage = memo(() => {
  const matches: boolean = useMediaQuery("(min-width:577px)");

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {matches ? (
        <Layout title="access">
          <MainWrapper>
            <BuckButton />
            <SubWrapper></SubWrapper>
          </MainWrapper>
        </Layout>
      ) : (
        <Layout title="access">
          <p>aa</p>
        </Layout>
      )}
    </div>
  );
});

export default Faq;

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  position: relative;
  color: #281914;
`;

const SubWrapper = styled.div`
  width: 1200px;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextWrapper = styled.div`
  flex: 0.5;
  height: 470px;
  padding: 15px 15px 15px 30px;
`;
