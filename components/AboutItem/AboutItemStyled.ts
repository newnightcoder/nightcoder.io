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
  // background-color: #333;
  background: ${({ theme }) => theme.bg.home};
  position: relative;
  padding: 0 30px 0 10px;
  transition: all 300ms;

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
    pointer-events: none;
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
    pointer-events: none;
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
  color: ${({ theme }) => theme.color};
`;

const ItemBtn = styled.button<Props>`
  height: 25px;
  width: 25px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color};
  transition: all 300ms;
  transform: ${(props) => (props.rotated ? "rotate(90deg)" : "rotate(0deg)")};
  &:hover {
    background: ${({ theme }) => theme.bg.contact};
  }
`;

const Item = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: ${(props) => props.display};
  padding: 0 15px 20px;
  word-break: break-all;
  color: ${({ theme }) => theme.color};
`;

export { ItemContainer, ItemTitle, ItemBtn, Item };
