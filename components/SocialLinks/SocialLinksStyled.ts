import styled from "styled-components";

interface Props {
  isMenuOpen: boolean;
}

const Container = styled.div<Props>`
  width: max-content;
  height: max-content;
  display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  color: white;
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3000;
  & > * + * {
    margin-left: 2rem;
  }
  // border: 1px solid white;
  // bottom: 0;
  // margin-left: calc(2rem - 10px);
`;

const Logo = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  border: 1px outset white;
`;

export { Container, Logo };
