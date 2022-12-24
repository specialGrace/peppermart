import React from "react";
import CartComponent from "../components/Cart/Cart";
import Layout from "../components/Layout/Layout";

function cart() {
  return (
    <div>
      <Layout>
        <CartComponent />
      </Layout>
    </div>
  );
}

export default cart;
