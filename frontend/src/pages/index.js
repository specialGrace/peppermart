import Head from "next/head";
import HomeComponent from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Peppermart</title>
          <meta name="description" content="Peppermart" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HomeComponent />
      </div>
    </Layout>
  );
};

export default Home;
