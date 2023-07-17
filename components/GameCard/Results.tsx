import { useContext, useEffect, useRef, useState } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import useCardGame, { ICard, ICardElement } from "../../hooks/useCardGame";
import CircleProgressBar from "./CircleProgressBar";
import GameCard from "./GameCard";
import { GameHeading } from "./GameCardStyled";
import {
  CloseBtn,
  CloseBtnSpan,
  GameResultsHeader,
  LogoWrapper,
  ResultCardContainer,
  ResultContainer,
  StackPageHeader,
  SubHeader,
  TableColumn,
  TableContainer,
  TechNameWrapper,
} from "./ResultsStyled";

interface ResultCardInnerProps {
  jsx: JSX.Element;
  str: string;
}

interface ResultsProps {
  displayResult: boolean;
  isGamePlayed: boolean;
  wins: number;
  // setWins: Dispatch<SetStateAction<number>>;
  flipped: ICard[];
  flippedResults: HTMLDivElement[];
  update: (resultCard: HTMLDivElement) => void;
}

const ResultCardInner = ({ jsx, str }: ResultCardInnerProps) => {
  const capitalizeFirstLetter = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <ResultCardContainer>
      <LogoWrapper>{jsx}</LogoWrapper>
      <TechNameWrapper>{capitalizeFirstLetter(str)}</TechNameWrapper>
    </ResultCardContainer>
  );
};

const Results = ({
  displayResult,
  isGamePlayed,
  wins,
  // setWins,
  flipped,
  update,
  flippedResults,
}: ResultsProps) => {
  const { setDisplayMemoryGameResult, setIsMemoryGamePlayed } =
    useContext(TransitionContext);

  const { integrationArray, frontArray, backendArray, dbArray, toolsArray } =
    useCardGame();
  const allPossibleResults = [
    ...integrationArray,
    ...frontArray,
    ...backendArray,
    ...dbArray,
    ...toolsArray,
  ];

  const integrationRefs = useRef<HTMLDivElement[]>([]);
  const frontRefs = useRef<HTMLDivElement[]>([]);
  const backendRefs = useRef<HTMLDivElement[]>([]);
  const dbRefs = useRef<HTMLDivElement[]>([]);
  const toolsRefs = useRef<HTMLDivElement[]>([]);
  const [allRefs, setAllRefs] = useState<HTMLDivElement[]>([]);

  const [progress, setProgress] = useState(false);

  const backToGameScreen = () => {
    setDisplayMemoryGameResult(!displayResult);
    setIsMemoryGamePlayed(!isGamePlayed);
  };

  useEffect(() => {
    if (isGamePlayed && displayResult) {
      setAllRefs([
        ...integrationRefs.current,
        ...frontRefs.current,
        ...backendRefs.current,
        ...dbRefs.current,
        ...toolsRefs.current,
      ]);
    }
  }, [isGamePlayed, displayResult]);

  const findCorrespondingResult = (card: ICard) => {
    const wonCard = allPossibleResults.find(
      (resultCard) => resultCard.name === card?.name
    );
    if (wonCard !== undefined) {
      console.log("allrefs", allRefs);
      const resultCard = allRefs.find((ref) => ref?.dataset.card === card.name);
      console.log("updated flippedResults array", flippedResults);
      update(resultCard);
      setTimeout(() => {
        resultCard?.classList.add("flip-card-x");
        // setWins(() => wins + 1);
        // updateCirclePgBar();
      }, 1000);
    }
  };

  const handleClassName = (el: ICardElement): string => {
    if (flippedResults.some((card) => card.dataset.card === el.name)) {
      return "flip-card-x";
    } else return "";
  };

  // const updateCirclePgBar = useCallback(() => {
  //   const duration = 200;
  //   const update = () =>
  //     setProgress((prevProgress) => (prevProgress + wins * 100) / 18);
  //   setInterval(update, duration);
  // }, [wins, progress]);

  useEffect(() => {
    if (!isGamePlayed) return;
    findCorrespondingResult(flipped[flipped.length - 1]);
  }, [flipped, allRefs]);

  // useEffect(() => {
  //   updateCirclePgBar();
  // }, [wins]);

  return (
    <ResultContainer
      displayResult={displayResult}
      isGamePlayed={isGamePlayed}
      wins={wins}
    >
      {!isGamePlayed ? (
        <>
          <StackPageHeader>
            <GameHeading fontSize={4} color={"orange"} shadow={true}>
              Languages & tools i'm using
            </GameHeading>
            <SubHeader>
              A overview of the technologies i’m familiar with or using
              regularly.
              <br />
              Ecosystems keep evolving non stop so i keep myself updated as much
              as possible.
            </SubHeader>
          </StackPageHeader>
          <CloseBtn onClick={() => backToGameScreen()}>
            <CloseBtnSpan>[ x ]</CloseBtnSpan>
          </CloseBtn>
        </>
      ) : (
        <GameResultsHeader>
          <GameHeading fontSize={5} color={"orange"} shadow={true}>
            Wins
          </GameHeading>
          <CircleProgressBar progress={progress} wins={wins} />
        </GameResultsHeader>
      )}
      <TableContainer>
        <TableColumn>
          <h2 style={{ whiteSpace: "nowrap" }}>Web integration</h2>
          {integrationArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                ref={(el) =>
                  (integrationRefs.current = [...integrationRefs.current, el])
                }
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
        </TableColumn>
        <TableColumn>
          <h2>Front</h2>
          {frontArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                ref={(el) => (frontRefs.current = [...frontRefs.current, el])}
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
        </TableColumn>
        <TableColumn>
          <h2>Backend</h2>
          {backendArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                ref={(el) =>
                  (backendRefs.current = [...backendRefs.current, el])
                }
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
                ref={(el) => (dbRefs.current = [...dbRefs.current, el])}
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
        </TableColumn>
        <TableColumn>
          <h2>Tools</h2>
          {toolsArray.map((el, i) => {
            return (
              <GameCard
                key={el.name}
                ref={(el) => (toolsRefs.current = [...toolsRefs.current, el])}
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
        </TableColumn>
      </TableContainer>
    </ResultContainer>
  );
};

export default Results;
