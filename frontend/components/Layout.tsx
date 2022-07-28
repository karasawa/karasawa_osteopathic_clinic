import { FC, ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";
import Header from "./organisms/Header";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: FC<Props> = ({ children, title = "default title" }) => {
  return (
    <MainContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  background-color: #555;
  width: 100%;
  height: 100vh;
`;
