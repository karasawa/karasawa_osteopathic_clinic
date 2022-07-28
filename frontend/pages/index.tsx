import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const matches: boolean = useMediaQuery("(min-width:577px)");

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {matches ? (
        <Layout title="home">
          <Link href="/" passHref>
            <Button color="secondary">ボタン</Button>
          </Link>
        </Layout>
      ) : (
        <Layout title="home">
          <p>aa</p>
        </Layout>
      )}
    </div>
  );
};

export default Home;
