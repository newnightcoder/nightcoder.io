import { forwardRef, useCallback, useRef, useState } from "react";
import { Item, ItemBtn, ItemContainer, ItemTitle } from "./AboutItemStyled";

interface Props {
  itemTitle: string;
  itemText: string;
}

const AboutItem = ({ itemTitle, itemText }: Props) => {
  const [display, setDisplay] = useState("none");
  const [rotated, setRotated] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const ItemContent = forwardRef<HTMLDivElement, {}>((_, ref) => {
    return (
      <Item ref={ref} display={display}>
        {itemText}
      </Item>
    );
  });

  const handleShowItemContent = useCallback(() => {
    if (display === "none") {
      setDisplay("block");
      setRotated(true);
    } else {
      setDisplay("none");
      setRotated(false);
    }
  }, [display, rotated]);

  return (
    <ItemContainer>
      <ItemTitle>
        <ItemBtn rotated={rotated} onClick={handleShowItemContent}>
          ▶︎
        </ItemBtn>
        {itemTitle}
      </ItemTitle>
      <ItemContent ref={itemRef} />
    </ItemContainer>
  );
};

export default AboutItem;
