import { useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { useHandleRoute } from "../../hooks";
import {
  Btn,
  BtnContainer,
  MenuContainer,
  OverflowWrapper,
} from "../Menu/MenuStyled";

const Menu = () => {
  const btns = ["home", "about", "projects", "stack", "contact"];
  const handleRoute = useHandleRoute();
  const { toggleMenu, isMenuOpen, timelinePages } =
    useContext(TransitionContext);

  // useIsoMorphicLayoutEffect(() => {
  //   document.body.style.overflowY = "hidden";
  //   return () => {
  //     document.body.style.overflowY = "auto";
  //   };
  // }, []);

  return (
    <MenuContainer>
      <OverflowWrapper>
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
      </OverflowWrapper>
    </MenuContainer>
  );
};

export default Menu;
