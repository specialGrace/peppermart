import React from "react";
import Messages from "../../../components/AdminDashboard/Messages/Messages";
import Layout from "../../../components/AdminDashboard/Layout/Layout";
import Head from "next/head";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Peppermart - Admin Dashboard</title>
        <meta name="description" content="Peppermart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Messages />
    </Layout>
  );
};

export default index;
