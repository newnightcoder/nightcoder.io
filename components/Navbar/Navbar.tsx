import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLinksAnimation } from "../../animations";
import { useHandleRoute } from "../../hooks";
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
  const navLinks = useMemo(
    () => ["home", "about", "projects", "stack", "contact"],
    []
  );

  const activateLink = useCallback(() => {
    navLinks.forEach((link) => {
      if (router.pathname === `/`) {
        setActive("");
      } else if (router.pathname === `/${link}`) {
        setActive(link);
      }
    });
  }, [navLinks, router.pathname]);

  useEffect(() => {
    activateLink();
  }, [activateLink]);

  return (
    <Wrapper>
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
      <BackgroundShapes />
    </Wrapper>
  );
};

export default Navbar;
