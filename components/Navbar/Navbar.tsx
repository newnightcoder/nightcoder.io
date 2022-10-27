import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { NavLinksAnimation } from "../../animations/NavLinksAnimation";
import { useHandleRoute } from "../../hooks/useHandleRoute";
import {
  BackgroundShapes,
  NavbarContainer,
  NavBtn,
  NavLink,
  NavLinksContainer,
  Wrapper,
} from "./NavbarStyled";

const Navbar = () => {
  const handleRoute = useHandleRoute();
  const router = useRouter();
  const [active, setActive] = useState("");
  const navLinks = ["home", "about", "projects", "stack", "contact"];

  const activateLink = useCallback(() => {
    navLinks.forEach((link) => {
      if (router.pathname === `/`) {
        setActive("");
      } else if (router.pathname === `/${link}`) {
        setActive(link);
      }
    });
  }, [router.pathname]);

  useEffect(() => {
    activateLink();
  }, [router.pathname]);

  return (
    <Wrapper>
      <BackgroundShapes />
      <NavbarContainer>
        <NavLinksAnimation>
          <NavLinksContainer id="ul">
            {navLinks.map((link, i) => {
              return (
                <NavLink key={link}>
                  <NavBtn id={link} onClick={() => handleRoute(`/${link}`)}>
                    <div>
                      <span
                        style={{
                          fontFamily: "courier, sans-serif",
                          color: active === link ? "black" : "white",
                        }}
                      >
                        [{i}]
                      </span>
                      <span
                        style={{
                          color: active === link ? "black" : "white",
                        }}
                      >
                        {link}
                      </span>
                    </div>
                  </NavBtn>
                </NavLink>
              );
            })}
          </NavLinksContainer>
        </NavLinksAnimation>
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
