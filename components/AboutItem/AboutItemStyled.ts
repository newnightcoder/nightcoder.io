import styled from "styled-components";

interface Props {
  display?: string;
  rotated?: boolean;
}

const ItemContainer = styled.div`
  // max-width: 500px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #333;
  position: relative;
  padding: 0 30px 0 10px;
  transition: all 500ms;

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    background: var(--gradient-blue);
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    border-radius: 50%;
    z-index: -1;
    opacity: 1;
    transition: all 500ms;
  }
  &::after {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    background: var(--gradient-orange);
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    // border-radius: 10px;
    border-radius: 50%;
    z-index: -2;
    transition: all 500ms;
  }

  &:hover {
    width: 100%;
    height: auto;
    border-radius: 10px;
    &::before {
      opacity: 0;
      border-radius: 10px;
    }
    &::after {
      border-radius: 10px;
    }
  }
`;

const ItemTitle = styled.p`
  width: 100%;
  // max-width: 900px;
  white-space: var(--about-items-whitespace);
`;

const ItemBtn = styled.button<Props>`
  height: 25px;
  width: 25px;
  border-radius: 5px;
  color: white;
  transition: all 300ms;
  transform: ${(props) => (props.rotated ? "rotate(90deg)" : "rotate(0deg)")};
  &:hover {
    background: #555;
  }
`;

const Item = styled.div<Props>`
  padding: 0 15px 20px;
  width: 100%;
  height: 100%;
  word-break: break-all;
  display: ${(props) => props.display};
`;

export { ItemContainer, ItemTitle, ItemBtn, Item };
