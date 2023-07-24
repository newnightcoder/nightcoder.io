import styled from "styled-components";

interface Props {
  height?: number;
  width?: number;
  isMenuOpen?: boolean;
}

// use of attrs because too many class changes on resize (over 200 changes)
// so the use of attrs is recommended with following syntax:

const Container = styled.div.attrs((props: Props) => ({
  style: {
    height: `${props.height}px`,
    width: `${props.width}px`,
    zIndex: `${props.isMenuOpen ? 2000 : -1000}`,
    opacity: `${props.isMenuOpen ? 1 : 0}`,
    visibility: `${props.isMenuOpen ? "visible" : "hidden"}`,
  },
}))<Props>`
  position: fixed;
  inset: 0;
  // display: var(--mobile-menu-display);
  display: block;
`;

export { Container };
