import { useContext, useState } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import useCardGame, { ICardElement } from "../../hooks/useCardGame";
import { Result, ResultContainer } from "../../styles/stack";

const Results = ({ displayResult, isGamePlayed }) => {
  const { svgMapToArray, flippedCards } = useCardGame();
  const { setDisplayMemoryGameResult, setIsMemoryGamePlayed } =
    useContext(TransitionContext);
  const [isWon, setIsWon] = useState(false);

  const checkIsFlipped = (card: ICardElement) => {
    const isFlipped = flippedCards.find((c) => c.name === card.name);
    if (isFlipped) return setIsWon(true);
  };

  const capitalizeFirstLetter = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const backToGameScreen = () => {
    setDisplayMemoryGameResult(!displayResult);
    setIsMemoryGamePlayed(!isGamePlayed);
  };

  // useEffect(() => {}, [flippedCards]);

  return (
    <ResultContainer displayResult={displayResult}>
      <button
        style={{
          position: "absolute",
          top: "calc(var(--navbar-height) + 10px)",
          right: "2vw",
        }}
        onClick={() => backToGameScreen()}
      >
        <span style={{ color: "white", pointerEvents: "none" }}>x</span>
      </button>
      {svgMapToArray.map((el, i) => {
        return (
          <Result key={i + 1} isWon={isWon} isGamePlayed={isGamePlayed}>
            <div style={{ height: "30px", width: "30px", marginRight: "10px" }}>
              {el.jsx}
            </div>
            <>{capitalizeFirstLetter(el.name)}</>
          </Result>
        );
      })}
    </ResultContainer>
  );
};

export default Results;
