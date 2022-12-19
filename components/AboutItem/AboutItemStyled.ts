import styled from "styled-components";

interface Props {
  display?: string;
  rotated?: boolean;
}

const ItemContainer = styled.div`
  width: 100%;
  background-color: #333;
  border-radius: 10px;
  position: relative;
  padding: 0 10px;

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    background-image: var(--gradient-blue);
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    border-radius: 10px;
    z-index: -1;
  }
`;

const ItemTitle = styled.p``;

const ItemBtn = styled.button<Props>`
  color: white;
  transform: ${(props) => (props.rotated ? "rotate(90deg)" : "rotate(0deg)")};
`;

const Item = styled.div<Props>`
  padding: 0 15px 20px;
  width: 100%;
  word-break: break-all;
  display: ${(props) => props.display};
`;

export { ItemContainer, ItemTitle, ItemBtn, Item };
