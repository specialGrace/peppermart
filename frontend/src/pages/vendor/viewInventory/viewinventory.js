import React from "react";
import Layout from "../../../components/AdminDashboard/Layout/Layout";
import OrdersCard from "../../../components/AdminDashboard/ViewInventory/OrdersCard";
import ViewInventHeading from "../../../components/AdminDashboard/ViewInventory/ViewInventHeading";
import ViewInventory from "../../../components/AdminDashboard/ViewInventory/ViewInventory";
import ViewInventoryItems from "../../../components/AdminDashboard/ViewInventory/ViewInventoryItems";
import ViewInventoryTable from "../../../components/AdminDashboard/ViewInventory/ViewInventoryTables";

const ViewInventorys = () => {
  return (
    <div>
      <Layout>
        <ViewInventHeading />
        <ViewInventory />
        <OrdersCard />
        <ViewInventoryItems />
      </Layout>
    </div>
  );
};

export default ViewInventorys;
