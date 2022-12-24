import React from "react";
import Layout from "../../../components/VendorDashboard/Layout/Layout";
import Notifications from "../../../components/VendorDashboard/Notifications/Notifications";
import Head from "next/head";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Notifications -Pepperart Admin Dashboard</title>
        <meta name="description" content="Peppermart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notifications />
    </Layout>
  );
};

export default index;
