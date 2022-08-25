import type { NextPage } from "next";
import Head from "next/head";
import { memo } from "react";
import AuthForm from "../components/molecules/AuthForm";
import styled from "styled-components";

// eslint-disable-next-line react/display-name
const AdminLogin: NextPage = memo(() => {
  return (
    <MainContainer>
      <Head>
        <title>admin_login</title>
      </Head>
      <AuthForm />
    </MainContainer>
  );
});

export default AdminLogin;

const MainContainer = styled.div`
  width: 100%;
  // height: 660px;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  position: relative;
  color: #281914;
`;
