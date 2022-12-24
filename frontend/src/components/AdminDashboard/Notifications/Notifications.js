import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import NotificationList from "./NotificationList/NotificationList";
import ModalVariant_1 from "../../Modal/ModalVariant_1";
import Confirm from "../../Confirm/Confirm";

import styles from "./Notifications.module.css";

const Index = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteHandler = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const cancelModalHandler = () => {
    setShowDeleteModal((prev) => !prev);
  };
  const nextModalHandler = () => {
    setShowDeleteModal((prev) => !prev);
  };
  const prevModalHandler = () => {
    setShowDeleteModal((prev) => !prev);
  };
  const notifications = [
    {
      id: "1",
      title: "Info - Hi Admin, Order 13245 is on its way to the customer",
      desc: "Important announcement! As of November 25, a new rule has been applied for Free Shipping users, check the full details here",
      date: "19.35 - 28 December 2020",
    },
    {
      id: "2",
      title: "Info - Hi Admin, Order 13245 is on its way to the customer",
      desc: "Important announcement! As of November 25, a new rule has been applied for Free Shipping users, check the full details here",
      date: "19.35 - 28 December 2020",
    },
    {
      id: "3",
      title: "Info - Hi Admin, Order 13245 is on its way to the customer",
      desc: "Important announcement! As of November 25, a new rule has been applied for Free Shipping users, check the full details here",
      date: "19.35 - 28 December 2020",
    },
  ];

  return (
    <div className={styles.container}>
      {/* confirm delete modal */}
      {showDeleteModal && (
        <ModalVariant_1 bgColor="rgba(0,0,0,0.65)">
          <Confirm
            text="Are you sure you want to clear all notifications?"
            closeHandler={cancelModalHandler}
            nextHandler={nextModalHandler}
            prevHandler={prevModalHandler}
          />
        </ModalVariant_1>
      )}

      <div className={styles.notificationTab}>
        <span className="notificationTabTitle">Notifications</span>
        <button onClick={deleteHandler}>
          {" "}
          <FaTrashAlt /> <span>Clear All</span>
        </button>
      </div>

      {/* notification list */}
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default Index;
