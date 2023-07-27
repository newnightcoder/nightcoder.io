import { forwardRef, useCallback, useRef, useState } from "react";
import { Item, ItemBtn, ItemContainer, ItemTitle } from "./AboutItemStyled";

interface Props {
  itemTitle: string;
  itemText: string;
  itemEmoji: string;
}

const AboutItem = ({ itemTitle, itemText, itemEmoji }: Props) => {
  const [display, setDisplay] = useState("none");
  const [rotated, setRotated] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
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
    <ItemContainer
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      {isMouseOver ? (
        <>
          <ItemTitle>
            <ItemBtn rotated={rotated} onClick={handleShowItemContent}>
              ▶︎
            </ItemBtn>
            {itemTitle}
          </ItemTitle>
          <ItemContent ref={itemRef} />
        </>
      ) : (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
            width: "inherit",
            transform: "translateX(-10px)",
            fontSize: "1.5rem",
            // border: "1px solid red",
          }}
        >
          {itemEmoji}
        </div>
      )}
    </ItemContainer>
  );
};

export default AboutItem;
