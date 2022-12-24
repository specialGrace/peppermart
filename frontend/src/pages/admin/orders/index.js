import React from "react";
import Layout from "../../../components/AdminDashboard/Layout/Layout";
import Orders from "../../../components/AdminDashboard/Orders/Orders/Orders";
import Head from "next/head";

const OrdersScreen = () => {
  return (
    <Layout>
      <Head>
        <title>Orders -Pepperart Admin Dashboard</title>
        <meta name="description" content="Peppermart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Orders />
    </Layout>
  );
};

export default OrdersScreen;
