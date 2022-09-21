import { useRouter } from "next/router";
import styles from "./navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleRoute = (path: string) => {
    pathname === path ? undefined : router.push(path);
  };

  const navLinks = ["home", "about", "projects", "stack", "contact"];

  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        {navLinks.map((link) => {
          return (
            <li key={link}>
              <button
                id={link}
                onClick={() => handleRoute(link === "home" ? "/" : `/${link}`)}
              >
                <div>{link}</div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
