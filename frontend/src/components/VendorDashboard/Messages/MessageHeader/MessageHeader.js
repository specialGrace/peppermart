import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";
import profile from "../../../../assets/images/Rectangle 3 (1).png";
import styles from "./MessageHeader.module.css";

const MessageHeader = () => {
  return (
    <div className={styles.messageHeader}>
      <div className={styles.profile}>
        <Image src={profile} alt="profile" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.messageHeaderInfo}>
        <div className={styles.messageHeaderInfo__header}>
          <span className={styles.messageHeaderInfo__customerName}>
            Jane Doe
          </span>
          <div className={styles.spacer}></div>
          <span className={styles.messageHeaderInfo__newCustomer}>
            New Customer
          </span>
          <span className={styles.messageHeaderInfo__viewProfile}>
            View Profile
          </span>
        </div>
        <div className={`${styles.messageHeaderSubInfo} `}>
          <div>
            <div
              className={styles.status}
              style={{ backgroundColor: "green", marginRight: "5px" }}
            ></div>
            <span
              style={{
                marginRight: "15px",
                color: "var(--dark20)",
                fontSize: "11px",
              }}
            >
              Online
            </span>
            <span style={{ color: "var(--dark20)", fontSize: "11px" }}>
              12.55 am
            </span>
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.noOfOrders}>
            <HiOutlineShoppingBag className={styles.shoppingIcon} />
            <span style={{ color: "var(--dark20)", fontSize: "11px" }}>
              0 Orders
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
