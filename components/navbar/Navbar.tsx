import { useRouter } from "next/router";
import { NavbarContainer, NavLink, NavLinksContainer } from "./NavbarStyled";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleRoute = (path: string) => {
    pathname === path ? undefined : router.push(path);
  };

  const navLinks = ["home", "about", "projects", "stack", "contact"];

  return (
    <NavbarContainer>
      <NavLinksContainer>
        {navLinks.map((link) => {
          return (
            <li key={link}>
              <NavLink
                id={link}
                onClick={() => handleRoute(link === "home" ? "/" : `/${link}`)}
              >
                <div>{link}</div>
              </NavLink>
            </li>
          );
        })}
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
