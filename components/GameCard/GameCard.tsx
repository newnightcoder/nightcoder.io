import { forwardRef, PropsWithChildren } from "react";
import { Card, CardBack, CardFront, CardInner } from "./GameCardStyled";

interface Props extends PropsWithChildren {
  height: string;
  width: string;
  isGamePlayed?: boolean;
  isResult?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
  cardName?: string;
}

const GameCard = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  return (
    <Card
      ref={ref}
      height={props.height}
      width={props.width}
      data-card={props.cardName}
      isGamePlayed={props.isGamePlayed}
      isResult={props.isResult}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >
      <CardInner isResult={props.isResult}>
        <CardFront isResult={props.isResult} />
        <CardBack isGamePlayed={props.isGamePlayed} isResult={props.isResult}>
          {props.children}
        </CardBack>
      </CardInner>
    </Card>
  );
});

export default GameCard;
