import React from "react";
import Layout from "../../components/AdminDashboard/Layout/Layout";
import Inventory from "../../components/AdminDashboard/Inventory/Inventory";
import InventoryItems from "../../components/AdminDashboard/Inventory/InventoryItems";

const InventoryScreen = () => {
  return (
    <div className="mt-20">
      <Layout>
        <Inventory />
        <InventoryItems />
      </Layout>
    </div>
  );
};

export default InventoryScreen;
