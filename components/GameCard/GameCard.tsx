import { forwardRef, PropsWithChildren } from "react";
import { Card, CardBack, CardFront, CardInner } from "./GameCardStyled";

interface Props extends PropsWithChildren {
  svg: JSX.Element;
}

// HOW TO USE IT IN Stack.ts file without error?

const GameCard = forwardRef<HTMLDivElement>(({ svg }: Props, ref) => {
  return (
    <Card ref={ref}>
      <CardInner>
        <CardFront />
        <CardBack>{svg}</CardBack>
      </CardInner>
    </Card>
  );
});

export default GameCard;
