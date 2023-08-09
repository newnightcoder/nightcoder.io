import {
  forwardRef,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
} from "react";
import { TransitionContext } from "../../context/TransitionContext";
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
}

const GameCard = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { isLightTheme, isMemoryGamePlayed } = useContext(TransitionContext);

  return (
    <Card
      ref={ref}
      height={props.height}
      width={props.width}
      data-card={props.cardName}
      isGamePlayed={isMemoryGamePlayed}
      isResult={props.isResult}
      isWon={props.isWon}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      className={props.className}
      round={props.round}
    >
      <CardInner isResult={props.isResult} isGamePlayed={isMemoryGamePlayed}>
        <CardFront isResult={props.isResult} round={props.round} />
        <CardBack
          isGamePlayed={isMemoryGamePlayed}
          isResult={props.isResult}
          isLightTheme={isLightTheme}
        >
          {props.children}
        </CardBack>
      </CardInner>
    </Card>
  );
});

export default GameCard;
