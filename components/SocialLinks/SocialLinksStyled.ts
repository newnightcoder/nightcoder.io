import styled from "styled-components";

const Container = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: fixed;
  bottom: -5vh;
  z-index: 3000;
  margin-left: calc(2rem - 10px);
  & > * + * {
    margin-left: 2rem;
  }
`;

const Logo = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
`;

export { Container, Logo };
