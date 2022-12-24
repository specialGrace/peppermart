import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import Image from "next/image";
import profile from "../../../../assets/images/profile.png";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.nav_search}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="search products here" />
        </div>

        <div className={styles.nav_items}>
          <ul>
            <li className={styles.calendar}>
              <RiCalendar2Line className={styles.calendarIcon} />
              <span className={styles.calendar__text}>Today</span>
            </li>
            <li className={styles.date}>
              <span className={styles.date__text}>August, 29</span>
              <BiChevronDown className={styles.chevronIcon} />
            </li>
            <li>
              <div className={styles.notification}>
                <IoMdNotificationsOutline className={styles.notificationIcon} />
                <div className={styles.count}>
                  <span>2</span>
                </div>
              </div>
            </li>
            <li className={styles.profile}>
              <div className={styles.profileImage}>
                <Image src={profile} alt="profile" />
              </div>
              <BiChevronDown className={styles.chevronIcon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
