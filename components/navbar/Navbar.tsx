import Link from "next/link";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        <li>
          <Link rel="stylesheet" href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/projects">
            <a>projects</a>
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/stack">
            <a>stack</a>
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
