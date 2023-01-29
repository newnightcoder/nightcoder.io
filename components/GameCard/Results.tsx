import { useContext, useRef, useState } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import useCardGame, { ICardElement } from "../../hooks/useCardGame";
import { Result, ResultContainer } from "../../styles/stack";
import GameCard from "./GameCard";

const Results = ({ displayResult, isGamePlayed }) => {
  const {
    integrationArray,
    flippedCards,
    frontArray,
    backendArray,
    dbArray,
    toolsArray,
    flipCard,
  } = useCardGame();
  const { setDisplayMemoryGameResult, setIsMemoryGamePlayed } =
    useContext(TransitionContext);
  const [isWon, setIsWon] = useState(false);
  const cardRefs = useRef<HTMLDivElement[]>([]);

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

  // useEffect(() => {checkIsFlipped()}, [flippedCards]);

  return (
    <ResultContainer displayResult={displayResult} isGamePlayed={isGamePlayed}>
      {!isGamePlayed ? (
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "2vw",
          }}
          onClick={() => backToGameScreen()}
        >
          <span style={{ color: "white", pointerEvents: "none" }}>x</span>
        </button>
      ) : null}
      <div>
        <h1
          style={{
            marginBottom: "4px",
            textAlign: "center",
            // border: "1px solid white",
          }}
        >
          Languages & tools i'm using
        </h1>
        <p
          style={{
            fontSize: "1rem",
            fontStyle: "italic",
            // border: "1px solid white",
          }}
        >
          A overview of the technologies i’m familiar with or using regularly.
          <br />
          Ecosystems keep evolving non stop so i keep myself updated as much as
          possible.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1100px",
          padding: "0 5vw",
          border: "1px solid lightgray",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ whiteSpace: "nowrap" }}>Web integration</h2>
          {integrationArray.map((el, i) => {
            return (
              <GameCard
                key={i + 1}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
                isResult={true}
                // isWon={isWon}
                isGamePlayed={isGamePlayed}
                data-card={el.name}
                onMouseOver={() =>
                  cardRefs.current[i].classList.toggle("flip-card-x")
                }
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
                      marginRight: "10px",
                    }}
                  >
                    {el.jsx}
                  </div>
                  <>{capitalizeFirstLetter(el.name)}</>
                </div>
              </GameCard>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>Front</h2>
          {frontArray.map((el, i) => {
            return (
              <Result key={i + 1} isWon={isWon} isGamePlayed={isGamePlayed}>
                <div
                  style={{ height: "30px", width: "30px", marginRight: "10px" }}
                >
                  {el.jsx}
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {capitalizeFirstLetter(el.name)}
                </div>
              </Result>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>Backend</h2>
          {backendArray.map((el, i) => {
            return (
              <Result key={i + 1} isWon={isWon} isGamePlayed={isGamePlayed}>
                <div
                  style={{ height: "30px", width: "30px", marginRight: "10px" }}
                >
                  {el.jsx}
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {capitalizeFirstLetter(el.name)}
                </div>
              </Result>
            );
          })}
          <h2>Databases</h2>
          {dbArray.map((el, i) => {
            return (
              <Result key={i + 1} isWon={isWon} isGamePlayed={isGamePlayed}>
                <div
                  style={{ height: "30px", width: "30px", marginRight: "10px" }}
                >
                  {el.jsx}
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {capitalizeFirstLetter(el.name)}
                </div>
              </Result>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>Tools</h2>
          {toolsArray.map((el, i) => {
            return (
              <Result key={i + 1} isWon={isWon} isGamePlayed={isGamePlayed}>
                <div
                  style={{ height: "30px", width: "30px", marginRight: "10px" }}
                >
                  {el.jsx}
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {capitalizeFirstLetter(el.name)}
                </div>
              </Result>
            );
          })}
        </div>
      </div>
    </ResultContainer>
  );
};

export default Results;
