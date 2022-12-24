import React from "react";
import { MdContactPhone } from "react-icons/md";
import {
  RiServiceFill,
} from "react-icons/ri";
import {GiPayMoney,GiFamilyHouse} from 'react-icons/gi'
import {BsInfoSquareFill} from "react-icons/bs"; 
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <React.Fragment>
      <nav className={drawerClasses}>
        <div className="drawerClasses-logo__wrapper">
          <h1 className="side-drawer-logo">
            <Image src={logo} alt="Titanium" width={200} height={120} />
          </h1>
        </div>
        <ul className="dropdown-user-icon" id="">
          <li className="dropdown">
            <div className="dropdownContainer">
              <BsInfoSquareFill className="dropdownIcon" />
              <Link href="/blog">
                <a className="dropdown_Link">About us</a> 
              </Link>
            </div>
          </li>
          <li className="dropdown">
            <div className="dropdownContainer">
              <RiServiceFill className="dropdownIcon" />
              <Link href="/donate">
                <a className="dropdown_Link">Services</a>
              </Link>
            </div> 
          </li>
          <li className="dropdown">
            <div className="dropdownContainer">
              <GiPayMoney className="dropdownIcon" />
              <Link href="/donate">
                <a className="dropdown_Link">Investment Club</a>
              </Link>
            </div> 
          </li>

          <li className="dropdown">
            <div className="dropdownContainer">
              <GiFamilyHouse className="dropdownIcon" />
              <Link href="/contact">
                <a className="dropdown_Link">Properties</a>
              </Link>
            </div>
          </li>

          <li className="dropdown">
            <div className="dropdownContainer">
              <MdContactPhone className="dropdownIcon" />
              <Link href="/our-team">
                <a className="dropdown_Link">Contact Us</a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default SideDrawer;
