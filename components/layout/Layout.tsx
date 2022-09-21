// import { Flip } from "gsap/dist/Flip";
import Hero from "../Hero/Hero";
import Navbar from "../navbar/Navbar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Hero />
      <div className={`${styles.pageContainer}`}>{children}</div>
    </div>
  );
};

export default Layout;
