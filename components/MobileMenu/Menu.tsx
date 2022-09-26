import { useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { useHandleRoute } from "../../hooks/useHandleRoute";
import { Btn, BtnContainer, MenuContainer } from "./MobileMenuStyled";

const Menu = () => {
  const btns = ["home", "about", "projects", "stack", "contact"];
  const handleRoute = useHandleRoute();
  const { toggleMenu, isMenuOpen, timelinePages } =
    useContext(TransitionContext);

  return (
    <MenuContainer>
      <BtnContainer>
        {btns.map((btn, i) => {
          return (
            <Btn
              key={btn}
              index={i + 1}
              onClick={() => {
                timelinePages.clear();
                handleRoute(`/${btn}`);
                toggleMenu(!isMenuOpen);
              }}
            >
              {btn}
            </Btn>
          );
        })}
      </BtnContainer>
    </MenuContainer>
  );
};

export default Menu;
