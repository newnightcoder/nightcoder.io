import styled from "styled-components";

interface Props {
  background?: string;
}

const Container = styled.div<Props>`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  inset: 0;
  background: ${(props) => props.background};
  color: red;
  z-index: -1;
  display: none;
`;

export { Container };
