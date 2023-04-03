import { useRouter } from "next/router";
import { useContext } from "react";
import { NavLinksAnimation } from "../../animations";
import { TransitionContext } from "../../context/TransitionContext";
import { useBgColor, useHandleRoute, useNavLinks } from "../../hooks";
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
  const { lang, setLang, setTheme, isLightTheme } =
    useContext(TransitionContext);
  const isBgDark = useBgColor();
  const { navLinks, active } = useNavLinks();

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

  return (
    <Wrapper>
      <NavbarContainer>
        <NavLinksAnimation>
          <NavLinksContainer id="ul">
            {navLinks.map((link, i) => {
              return (
                <NavLink key={i + 1}>
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
                            active === link && isBgDark
                              ? "white"
                              : active === link && !isBgDark
                              ? "black"
                              : "none",
                        }}
                      >
                        [{i}]
                      </span>
                      <span
                        style={{
                          textDecoration:
                            active === link ? "underline" : "none",
                          textDecorationColor:
                            active === link && isBgDark
                              ? "white"
                              : active === link && !isBgDark
                              ? "black"
                              : "none",
                        }}
                      >
                        {link}
                      </span>
                    </div>
                  </NavBtn>
                </NavLink>
              );
            })}
            <button
              style={{
                // position: "absolute",
                // left: "50%",
                // transform: "translateX(-50%)",
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                padding: "0 10px",
              }}
              onClick={() => setTheme(isLightTheme ? "dark" : "light")}
            >
              {isLightTheme ? "dark" : "light"}
            </button>
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
