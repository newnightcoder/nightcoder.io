import { useEffect, useState } from "react";
import useCardGame, { ICardElement } from "../../hooks/useCardGame";
import { Result, ResultContainer } from "../../styles/stack";

const Results = ({ displayResult }) => {
  const { svgMapToArray, flippedCards } = useCardGame();
  const [isWon, setIsWon] = useState(false);

  const checkIsFlipped = (card: ICardElement) => {
    const isFlipped = flippedCards.find((c) => c.name === card.name);
    if (isFlipped) return setIsWon(true);
  };

  useEffect(() => {}, [flippedCards]);

  return (
    <ResultContainer displayResult={displayResult}>
      {svgMapToArray.map((el, i) => {
        return (
          <Result key={i + 1} isWon={isWon}>
            <div style={{ height: "30px", width: "30px", marginRight: "10px" }}>
              {el.jsx}
            </div>
            <>{el.name}</>
          </Result>
        );
      })}
    </ResultContainer>
  );
};

export default Results;
