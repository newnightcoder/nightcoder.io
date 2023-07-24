import { forwardRef, MouseEventHandler, PropsWithChildren } from "react";
import { Card, CardBack, CardFront, CardInner } from "./GameCardStyled";

interface Props extends PropsWithChildren {
  // height: string;
  // width: string;
  height: number | string;
  width: number | string;
  isGamePlayed?: boolean;
  isResult?: boolean;
  isWon?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseOver?: MouseEventHandler<HTMLDivElement>;
  cardName?: string;
  className?: string;
  round?: number;
  isLightTheme?: boolean;
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
      isWon={props.isWon}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      className={props.className}
      round={props.round}
    >
      <CardInner isResult={props.isResult} isGamePlayed={props.isGamePlayed}>
        <CardFront isResult={props.isResult} round={props.round} />
        <CardBack
          isGamePlayed={props.isGamePlayed}
          isResult={props.isResult}
          isLightTheme={props.isLightTheme}
        >
          {props.children}
        </CardBack>
      </CardInner>
    </Card>
  );
});

export default GameCard;
