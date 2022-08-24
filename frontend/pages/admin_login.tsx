import type { NextPage } from "next";
import Head from "next/head";
import { memo } from "react";
import AuthForm from "../components/molecules/AuthForm";
// eslint-disable-next-line react/display-name
const AdminLogin: NextPage = memo(() => {
  return (
    <div>
      <Head>
        <title>admin_login</title>
      </Head>
      <AuthForm />
    </div>
  );
});

export default AdminLogin;
