import React from "react";
import Link from "next/link";
import logo from "../../../../assets/images/logo.png";
import Image from "next/image";
import { CiLogout, CiHome, CiSettings } from "react-icons/ci";
import { BiStore } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import {
  MdOutlineAllInbox,
  MdOutlineShoppingCart,
  MdOutlineMessage,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import styles from "./SideBar.module.css";
import { FaRegUser } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className={styles.container}>
      {/* logo */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logo}>
            <Image src={logo} alt="peppermart" />
          </a>
        </Link>
      </div>

      {/* items */}
      <div className={styles.itemsContainer}>
        <ul>
          <li>
            <Link href="/vendor">
              <CiHome className={`${styles.icons} ${styles.homeIcon}`} />
            </Link>
            <Link href="/vendor">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/vendor/products">
              <MdOutlineAllInbox
                className={`${styles.icons} ${styles.productIcon}`}
              />
            </Link>
            <Link href="/vendor/products">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/vendor/orders">
              <MdOutlineShoppingCart
                className={`${styles.icons} ${styles.orderIcon}`}
              />
            </Link>
            <Link href="/vendor/orders">
              <a>Orders</a>
            </Link>
          </li>
          <li>
            <Link href="/vendor/vendor/vendors">
              <BiStore
                className={`${styles.icons} ${styles.notificationIcon}`}
              />
            </Link>
            <Link href="/vendor/vendor/vendors">
              <a>Vendors</a>
            </Link>
          </li>
          <li>
            <Link href="/customer/customers">
              <BsCart3
                className={`${styles.icons} ${styles.notificationIcon}`}
              />
            </Link>
            <Link href="/customer/customers">
              <a>Customers</a>
            </Link>
          </li>
          <li>
            <Link href="/vendor/analytics">
              <BsGraphUp
                className={`${styles.icons} ${styles.analyticsIcon}`}
              />
            </Link>
            <Link href="/vendor/analytics">
              <a>Analytics</a>
            </Link>
          </li>

          <li>
            <Link href="/vendor/messages">
              <MdOutlineMessage
                className={`${styles.icons} ${styles.notificationIcon}`}
              />
            </Link>
            <Link href="/vendor/messages">
              <a>Messages</a>
            </Link>
          </li>

          <li>
            <Link href="/vendor/notifications">
              <IoMdNotificationsOutline
                className={`${styles.icons} ${styles.notificationIcon}`}
              />
            </Link>
            <Link href="/vendor/notifications">
              <a>Notification</a>
            </Link>
          </li>
          <li>
            <Link href="/vendor/profile">
              <FaRegUser className={`${styles.icons} ${styles.settingIcon}`} />
            </Link>
            <Link href="/vendor/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/vendor/settings">
              <CiSettings className={`${styles.icons} ${styles.settingIcon}`} />
            </Link>
            <Link href="/vendor/settings">
              <a>Settings</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.logout}>
        <CiLogout className={`${styles.icons} ${styles.logoutIcon}`} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default SideBar;
