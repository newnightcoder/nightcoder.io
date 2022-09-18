import Head from "next/head";
import Navbar from "../navbar/Navbar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Daniel Julien Portfolio</title>
        <meta name="description" content="This is my portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
