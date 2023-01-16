import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NavLinksAnimation } from "../../animations";
import { TransitionContext } from "../../context/TransitionContext";
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
  const { pathname, locale, query, asPath } = useRouter();
  const { lang, setLang } = useContext(TransitionContext);
  const [active, setActive] = useState("");
  const navLinks = useMemo(
    () => ["home", "about", "projects", "stack", "contact"],
    []
  );
  const [isBgDark, setIsBgDark] = useState(true);
  const isProjectPage = pathname === "/projects/[slug]";

  const handleLinkColor = useCallback(() => {
    isProjectPage ? setIsBgDark(false) : setIsBgDark(true);
  }, [pathname, setIsBgDark]);

  const activateLink = useCallback(() => {
    navLinks.forEach((link) => {
      if (pathname === `/`) {
        setActive("");
      } else if (pathname === `/${link}`) {
        setActive(link);
      }
    });
  }, [navLinks, pathname]);

  const handleLocale = (locale: string) => {
    switch (locale) {
      case "en":
        router.push({ pathname, query }, asPath, { locale: "fr" });
        setLang("fr");
        break;
      case "fr":
        router.push({ pathname, query }, asPath, { locale: "en" });
        setLang("en");
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    activateLink();
    handleLinkColor();
  }, [activateLink, handleLinkColor]);

  return (
    <Wrapper>
      <NavbarContainer>
        <NavLinksAnimation>
          <NavLinksContainer id="ul">
            {navLinks.map((link, i) => {
              return (
                <NavLink key={link}>
                  <NavBtn
                    id={link}
                    isBgDark={isBgDark}
                    onClick={() => handleRoute(`/${link}`)}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "courier, sans-serif",
                          textDecoration:
                            active === link ? "underline" : "none",
                          textDecorationColor:
                            active === link ? "black" : "white",
                        }}
                      >
                        [{i}]
                      </span>
                      <span
                        style={{
                          textDecoration:
                            active === link ? "underline" : "none",
                          textDecorationColor:
                            active === link ? "black" : "white",
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
        <button
          onClick={() => {
            // handleLang();
            handleLocale(locale);
          }}
          style={{
            fontSize: "2rem",
            position: "absolute",
            right: "var(--lang-emoji-right)",
            left: "var(--lang-emoji-left)",
          }}
        >
          {locale === "en" ? <div>🥐</div> : <div>🍔</div>}
        </button>
      </NavbarContainer>
      <BackgroundShapes />
    </Wrapper>
  );
};

export default Navbar;
