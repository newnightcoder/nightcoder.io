import styled from "styled-components";

interface Props {
  background?: string;
  word?: string;
}

const BgContainer = styled.div<Props>`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  inset: 0;
  padding-top: var(--navbar-height);
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

const WordContainer = styled.div`
  height: calc(100% - var(--navbar-height));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--poppins);
  font-size: 40vmin;
  font-weight: 700;
  letter-spacing: -5px;
  line-height: 100vh;
  transform: scale(1, 3);
  text-transform: uppercase;
  color: #444;
  // border: 1px solid yellow;
`;

export { BgContainer, WordContainer };
