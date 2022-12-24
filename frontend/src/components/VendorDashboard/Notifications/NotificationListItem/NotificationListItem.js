import React from "react";
import { BsTrash, BsInfoCircle } from "react-icons/bs";

import styles from "./NotificationListItem.module.css";

const NotificationListItem = ({ notification }) => {
  return (
    <>
      <div className={styles.container}>
        <BsInfoCircle className={styles.infoIcon} />
        <div className={styles.noficationContent}>
          <div className={styles.noficationContent__Title}>
            <span>{notification.title}</span>
            <BsTrash className={styles.trashIcon} />
          </div>
          <p className={styles.noficationContent__desc}>{notification.desc}</p>
          <p className={styles.noficationContent__date}>{notification.date}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NotificationListItem;
