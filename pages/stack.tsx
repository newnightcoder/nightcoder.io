import { useEffect, useRef, useState } from "react";
import { Results } from "../components";
import {
  Card,
  CardBack,
  CardFront,
  CardInner,
} from "../components/GameCard/GameCardStyled";
import {
  useCardGame,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { ICard, ICardElement } from "../hooks/useCardGame";
import {
  BtnContainer,
  CardContainer,
  ChoiceBtn,
  GameTitleContainer,
} from "../styles/stack";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef(null);
  const handleBackground = useTransitionBackground();
  const { shuffledCards, flipCard, compare, wins, flippedCards } =
    useCardGame();
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [displayResult, setDisplayResult] = useState(false);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  useEffect(() => {
    if (wins === 0) return;
    setTimeout(() => {
      setDisplayResult(true);
    }, 1000);
    if (wins !== 6) {
      setTimeout(() => {
        setDisplayResult(false);
      }, 2200);
    }
  }, [wins]);

  const SymbolCard = ({ card }: { card: ICard }) => {
    const symbol = shuffledCards.find((x) => x.name == card.name);
    return symbol !== undefined ? (
      <div style={{ height: "30px", width: "30px", marginRight: "10px" }}>
        {symbol.jsx}
      </div>
    ) : (
      <>null</>
    );
  };

  const capitalizeFirstLetter = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <PageContainer ref={ref} id="stack" justify="center">
      <GameTitleContainer ref={welcomeRef}>
        welcome to <br />
        memory game
        <br /> stack edition
        <BtnContainer>
          <ChoiceBtn
            onClick={() => welcomeRef.current.classList.add("split-screen")}
          >
            <span style={{ fontSize: "2rem" }}>😁</span>
            <span style={{ textTransform: "uppercase", fontWeight: "700" }}>
              play
            </span>
          </ChoiceBtn>
          <ChoiceBtn>
            <span style={{ fontSize: "2rem" }}>🤬</span>i really don't have time
            for this sh*t
          </ChoiceBtn>
        </BtnContainer>
      </GameTitleContainer>
      <CardContainer>
        {shuffledCards.map((card: ICardElement, i) => {
          return (
            // <GameCard
            //   key={i + 1}
            //   svg={card.jsx}
            //   ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
            //   data-card={card.name}
            //   onClick={() => {
            //     flipCard(cardRefs, i);
            //     compare();
            //   }}
            // />
            // ❗️❗️ TO REFACTOR TO Card component above = forwardRef. but how???
            <Card
              key={i + 1}
              ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
              data-card={card.name}
              onClick={() => {
                flipCard(cardRefs, i);
                compare();
              }}
            >
              <CardInner>
                <CardFront />
                <CardBack>{card.jsx}</CardBack>
              </CardInner>
            </Card>
          );
        })}
      </CardContainer>

      {displayResult ? <Results displayResult={displayResult} /> : null}
    </PageContainer>
  );
};

export default Stack;
