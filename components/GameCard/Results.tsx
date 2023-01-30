import { useContext, useRef, useState } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import useCardGame, { ICardElement } from "../../hooks/useCardGame";
import { ResultContainer } from "../../styles/stack";
import GameCard from "./GameCard";

const ResultInner = ({ jsx, str }: { jsx: JSX.Element; str: string }) => {
  const capitalizeFirstLetter = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "30px",
          width: "30px",
          marginRight: "10px",
        }}
      >
        {jsx}
      </div>
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontSize: "1.1rem",
        }}
      >
        {capitalizeFirstLetter(str)}
      </div>
    </div>
  );
};

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
  const cardRefs2 = useRef<HTMLDivElement[]>([]);
  const cardRefs3 = useRef<HTMLDivElement[]>([]);
  const cardRefs4 = useRef<HTMLDivElement[]>([]);
  const cardRefs5 = useRef<HTMLDivElement[]>([]);

  const checkIsFlipped = (card: ICardElement) => {
    const isFlipped = flippedCards.find((c) => c.name === card.name);
    if (isFlipped) return setIsWon(true);
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
      {isGamePlayed ? (
        <div
          style={{
            width: "100%",
            padding: "0 5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            // border: "1px solid white",
          }}
        >
          <span
            style={{
              fontSize: "5rem",
              fontWeight: "700",
              fontStyle: "italic",
              textTransform: "uppercase",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "var(--gradient-orange)",
            }}
          >
            Wins
          </span>
          <div
            style={{
              height: "75px",
              width: "75px",
              borderRadius: "50%",
              border: "4px solid yellow",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            18
          </div>
        </div>
      ) : (
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
            Ecosystems keep evolving non stop so i keep myself updated as much
            as possible.
          </p>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1100px",
          padding: "0 5vw",
          // border: "1px solid lightgray",
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
                key={el.name}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
                isResult={true}
                isGamePlayed={isGamePlayed}
                onMouseOver={() =>
                  cardRefs.current[i].classList.toggle("flip-card-x")
                }
              >
                <ResultInner jsx={el.jsx} str={el.name} />
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
              <GameCard
                key={el.name}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                ref={(el) => (cardRefs2.current = [...cardRefs2.current, el])}
                isResult={true}
                isGamePlayed={isGamePlayed}
                onMouseOver={() =>
                  cardRefs2.current[i].classList.toggle("flip-card-x")
                }
              >
                <ResultInner jsx={el.jsx} str={el.name} />
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
          <h2>Backend</h2>
          {backendArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                ref={(el) => (cardRefs3.current = [...cardRefs3.current, el])}
                isResult={true}
                isGamePlayed={isGamePlayed}
                onMouseOver={() =>
                  cardRefs3.current[i].classList.toggle("flip-card-x")
                }
              >
                <ResultInner jsx={el.jsx} str={el.name} />
              </GameCard>
            );
          })}
          <h2>Databases</h2>
          {dbArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                ref={(el) => (cardRefs4.current = [...cardRefs4.current, el])}
                isResult={true}
                isGamePlayed={isGamePlayed}
                onMouseOver={() =>
                  cardRefs4.current[i].classList.toggle("flip-card-x")
                }
              >
                <ResultInner jsx={el.jsx} str={el.name} />
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
          <h2>Tools</h2>
          {toolsArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                ref={(el) => (cardRefs5.current = [...cardRefs5.current, el])}
                isResult={true}
                isGamePlayed={isGamePlayed}
                onMouseOver={() =>
                  cardRefs5.current[i].classList.toggle("flip-card-x")
                }
              >
                <ResultInner jsx={el.jsx} str={el.name} />
              </GameCard>
            );
          })}
        </div>
      </div>
    </ResultContainer>
  );
};

export default Results;
