import React from "react";
import Layout from "../components/Layout/Layout";
import CreateWishlist from "../components/Wishlist/CreateWishlist";

function createWishlist() {
  return (
    <div>
      <Layout>
        <CreateWishlist />
      </Layout>
    </div>
  );
}

export default createWishlist;
