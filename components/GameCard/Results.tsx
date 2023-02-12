import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import useCardGame, { ICard, ICardElement } from "../../hooks/useCardGame";
import { ResultContainer } from "../../styles/stack";
import GameCard from "./GameCard";

interface ResultCardInnerProps {
  jsx: JSX.Element;
  str: string;
}

interface ResultsProps {
  displayResult: boolean;
  isGamePlayed: boolean;
  wins: number;
  flipped: ICard[];
  flippedResults: HTMLDivElement[];
  update: (resultCard: HTMLDivElement) => void;
}

const ResultCardInner = ({ jsx, str }: ResultCardInnerProps) => {
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

const Results = ({
  displayResult,
  isGamePlayed,
  wins,
  flipped,
  update,
  flippedResults,
}: ResultsProps) => {
  const { integrationArray, frontArray, backendArray, dbArray, toolsArray } =
    useCardGame();
  const { setDisplayMemoryGameResult, setIsMemoryGamePlayed } =
    useContext(TransitionContext);

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs2 = useRef<HTMLDivElement[]>([]);
  const cardRefs3 = useRef<HTMLDivElement[]>([]);
  const cardRefs4 = useRef<HTMLDivElement[]>([]);
  const cardRefs5 = useRef<HTMLDivElement[]>([]);
  const allPossibleResults = [
    ...integrationArray,
    ...frontArray,
    ...backendArray,
    ...dbArray,
    ...toolsArray,
  ];
  const [allRefs, setAllRefs] = useState<HTMLDivElement[]>([]);

  const backToGameScreen = () => {
    setDisplayMemoryGameResult(!displayResult);
    setIsMemoryGamePlayed(!isGamePlayed);
  };

  useEffect(() => {
    if (isGamePlayed && displayResult) {
      setAllRefs([
        ...cardRefs.current,
        ...cardRefs2.current,
        ...cardRefs3.current,
        ...cardRefs4.current,
        ...cardRefs5.current,
      ]);
    }
  }, [displayResult, isGamePlayed]);

  const findCorrespondingResult = useCallback(
    (card: ICard) => {
      const wonCard = allPossibleResults.find(
        (resultCard) => resultCard.name === card?.name
      );
      if (wonCard !== undefined) {
        console.log("allrefs", allRefs);

        const resultCard = allRefs.find(
          (ref) => ref?.dataset.card === card.name
        );
        console.log("updated flippedResults array", flippedResults);
        update(resultCard);
        setTimeout(() => {
          resultCard?.classList.add("flip-card-x");
        }, 1000);
      }
    },
    [allPossibleResults, allRefs, flippedResults]
  );

  const handleClassName = (el: ICardElement): string => {
    if (flippedResults.some((card) => card.dataset.card === el.name)) {
      return "flip-card-x";
    } else return "";
  };

  useEffect(() => {
    if (!isGamePlayed) return;
    findCorrespondingResult(flipped[flipped.length - 1]);
  }, [flipped, allRefs]);

  return (
    <ResultContainer displayResult={displayResult} isGamePlayed={isGamePlayed}>
      {!isGamePlayed ? (
        <button
          style={{
            position: "absolute",
            top: "calc(var(--navbar-height) + 10px)",
            right: "2vw",
          }}
          onClick={() => backToGameScreen()}
        >
          <span
            style={{
              color: "white",
              pointerEvents: "none",
              fontSize: "1rem",
              fontWeight: "100",
            }}
          >
            [ x ]
          </span>
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
              filter: "drop-shadow(-4px 2px 4px rgba(255,255,255,.5))",
            }}
          >
            Wins
          </span>
          <div
            style={{
              height: "75px",
              width: "75px",
              position: "relative",
              borderRadius: "50%",
              border: "4px solid yellow",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: "500",
              // APLLY FILTER TO PSEUDO ELEMENT SO IT DOESNT APPLY TO CHILD ELEMENT WINS
              filter: "drop-shadow(-4px 2px 4px rgba(255,255,255,.95))",
            }}
          >
            <span>{wins}</span>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              marginBottom: "0",
              textAlign: "center",
              fontSize: "4rem",
              fontWeight: "700",
              fontStyle: "italic",
              textTransform: "uppercase",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "var(--gradient-orange)",
              filter: "drop-shadow(-2px 1px 2px rgba(255,255,255,.5))", // drop-shadow divisé par 2 par rapport à "wins"
              // border: "1px solid white",
            }}
          >
            Languages & tools i'm using
          </h1>
          <p
            style={{
              fontSize: "1rem",
              fontStyle: "italic",
              width: "max-content",
              marginTop: "0",
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
                ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                cardName={el.name}
                isResult={true}
                isGamePlayed={isGamePlayed}
                className={handleClassName(el)}
              >
                <ResultCardInner jsx={el.jsx} str={el.name} />
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
                ref={(el) => (cardRefs2.current = [...cardRefs2.current, el])}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                cardName={el.name}
                isResult={true}
                isGamePlayed={isGamePlayed}
                className={handleClassName(el)}
              >
                <ResultCardInner jsx={el.jsx} str={el.name} />
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
                ref={(el) => (cardRefs3.current = [...cardRefs3.current, el])}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                cardName={el.name}
                isResult={true}
                isGamePlayed={isGamePlayed}
                className={handleClassName(el)}
              >
                <ResultCardInner jsx={el.jsx} str={el.name} />
              </GameCard>
            );
          })}
          <h2>Databases</h2>
          {dbArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                ref={(el) => (cardRefs4.current = [...cardRefs4.current, el])}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                cardName={el.name}
                isResult={true}
                isGamePlayed={isGamePlayed}
                className={handleClassName(el)}
              >
                <ResultCardInner jsx={el.jsx} str={el.name} />
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
                ref={(el) => (cardRefs5.current = [...cardRefs5.current, el])}
                height="var(--result-card-height)"
                width="var(--result-card-width)"
                cardName={el.name}
                isResult={true}
                isGamePlayed={isGamePlayed}
                className={handleClassName(el)}
              >
                <ResultCardInner jsx={el.jsx} str={el.name} />
              </GameCard>
            );
          })}
        </div>
      </div>
    </ResultContainer>
  );
};

export default Results;
