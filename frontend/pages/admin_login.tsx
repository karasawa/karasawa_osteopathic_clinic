import type { NextPage } from "next";
import Head from "next/head";
import AuthForm from "../components/molecules/AuthForm";

const AdminLogin: NextPage = () => {
  return (
    <div>
      <Head>
        <title>admin_login</title>
      </Head>
      <AuthForm />
    </div>
  );
};

export default AdminLogin;
