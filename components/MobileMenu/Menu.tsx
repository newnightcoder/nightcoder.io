import { Btn, BtnContainer, MenuContainer } from "./MobileMenuStyled";

const Menu = () => {
  const btns = ["home", "about", "projects", "stack", "contact"];

  return (
    <MenuContainer>
      <BtnContainer>
        {btns.map((btn, i) => {
          return (
            <Btn key={btn} index={i + 1}>
              {btn}
            </Btn>
          );
        })}
      </BtnContainer>
    </MenuContainer>
  );
};

export default Menu;
