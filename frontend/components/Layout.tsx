import { FC, memo, ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";
import Header from "./organisms/Header";

type Props = {
  children: ReactNode;
  title: string;
};
// eslint-disable-next-line react/display-name
const Layout: FC<Props> = memo(({ children, title = "default title" }) => {
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
});

export default Layout;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
