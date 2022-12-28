import styled from "styled-components";

interface Props {
  display?: string;
  rotated?: boolean;
}

const ItemContainer = styled.div`
  width: 99%;
  background-color: #333;
  border-radius: 10px;
  position: relative;
  padding: 0 10px;
  // z-index: -1;

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    background: var(--gradient-blue);
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    border-radius: 10px;
    z-index: -1;
    opacity: 1;
    transition: opacity 500ms;
  }
  &::after {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    background: var(--gradient-orange);
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    border-radius: 10px;
    z-index: -2;
  }

  &:hover {
    &::before {
      opacity: 0;
    }
  }
`;

const ItemTitle = styled.p`
  width: max-content;
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
  word-break: break-all;
  white-space: wrap;
  display: ${(props) => props.display};
`;

export { ItemContainer, ItemTitle, ItemBtn, Item };
