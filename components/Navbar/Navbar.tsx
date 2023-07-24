import { useRouter } from "next/router";
import { useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { useBgColor, useHandleRoute, useNavLinks } from "../../hooks";
import {
  DarkModeBtn,
  LocaleBtn,
  NavbarContainer,
  OptionsContainer,
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
        {/* <NavLinksAnimation>
          <NavLinksContainer id="ul">
            {navLinks.map((link, i) => {
              return (
                <NavBtnContainer key={i + 1}>
                  <NavBtn
                    id={link}
                    isBgDark={isBgDark}
                    isLightTheme={isLightTheme}
                    onClick={() => handleRoute(`/${link}`)}
                  >
                    <div>
                      <BtnContent
                        active={active === link}
                        isLightTheme={isLightTheme}
                      >
                        [{i}]
                      </BtnContent>
                      <BtnContent
                        active={active === link}
                        isLightTheme={isLightTheme}
                      >
                        {link}
                      </BtnContent>
                    </div>
                  </NavBtn>
                </NavBtnContainer>
              );
            })}
          </NavLinksContainer>
        </NavLinksAnimation> */}
        <OptionsContainer>
          <DarkModeBtn
            isLightTheme={isLightTheme}
            onClick={() => setTheme(isLightTheme ? "dark" : "light")}
          >
            {isLightTheme ? "dark" : "light"}
          </DarkModeBtn>
          <LocaleBtn onClick={() => handleLocale(locale)}>
            {locale === "en" ? (
              <div style={{ transform: "translateY(3px)" }}>🥐</div>
            ) : (
              <div style={{ transform: "translateY(3px)" }}>🍩</div>
            )}
          </LocaleBtn>
        </OptionsContainer>
      </NavbarContainer>

      {/* <BackgroundShapes /> */}
    </Wrapper>
  );
};

export default Navbar;
