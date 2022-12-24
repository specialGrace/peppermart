import React, { useState } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import SideDrawer from "../SideDrawer/SideDrawer";
import Footer from "./Footer/Footer";
import Backdrop from "../Backdrop/Backdrop.js";
import styles from "./Layout.module.css";

const Layout = ({
  title = "Peppermart",
  description = "Peppermart description",
  keywords = "Peppermart",
  url = "",
  image = "",
  children,
}) => {
  const [SideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  if (SideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={url}></link>
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="peppermart"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={image ? image : "defaultImaageurl"}
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="peppermart"></meta>
        <link rel="icon" href="/sample.ico" />
      </Head>
      <Header
        drawerToggleClickHandler={drawerToggleClickHandler}
        SideDrawerOpen={SideDrawerOpen}
      />
      {/* <SideDrawer show={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen}/>
       {backdrop} */}
      <main className={`${styles.main}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
