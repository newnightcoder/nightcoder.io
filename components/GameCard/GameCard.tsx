import { Card, CardBack, CardFront, CardInner } from "./GameCardStyled";

interface Props {
  svg: JSX.Element;
}

const GameCard = ({ svg }: Props) => {
  return (
    <Card>
      <CardInner>
        <CardFront />
        <CardBack>{svg}</CardBack>
      </CardInner>
    </Card>
  );
};

export default GameCard;
