import dynamic from "next/dynamic";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { useWindowSize } from "../../hooks";
import useCardGame, { ICard, ICardElement } from "../../hooks/useCardGame";
import GameResultsHeading from "./GameResultsHeading";
import {
  CloseBtn,
  CloseBtnSpan,
  ResultContainer,
  TableContainer,
} from "./ResultsStyled";
import StackColumn from "./StackColumn";
import StackPageHeading from "./StackPageHeading";

interface ResultsProps {
  wins: number;
  setRound: Dispatch<SetStateAction<number>>;
  flipped: ICard[];
  flippedResults: HTMLDivElement[];
  update: (resultCard: HTMLDivElement) => void;
  resetGame: () => void;
}

const Results = ({
  wins,
  flipped,
  update,
  flippedResults,
  resetGame,
}: ResultsProps) => {
  const {
    displayMemoryGameResult,
    setDisplayMemoryGameResult,
    isMemoryGamePlayed,
  } = useContext(TransitionContext);

  const { cardCategories, cards } = useCardGame();

  const allPossibleResults = cards;
  const integrationRefs = useRef<HTMLDivElement[]>([]);
  const frontRefs = useRef<HTMLDivElement[]>([]);
  const backendRefs = useRef<HTMLDivElement[]>([]);
  const dbRefs = useRef<HTMLDivElement[]>([]);
  const toolsRefs = useRef<HTMLDivElement[]>([]);

  const [allRefs, setAllRefs] = useState<HTMLDivElement[]>([]);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(wins - 1);
  const { height, width } = useWindowSize();
  const [confettiCanvasHeight, setConfettiCanvasHeight] = useState(0);

  // 😎 nextjs dynamic import to import Confetti component (so that component resizes with window size)
  // Solution from https://github.com/alampros/react-confetti/issues/130#issuecomment-1297020799
  const Confetti = dynamic(() => import("react-confetti"), {
    ssr: false,
  });

  const stackTables = useMemo(
    () => [
      {
        name: "web integration",
        array: cardCategories[0],
        refs: integrationRefs,
      },
      { name: "front", array: cardCategories[1], refs: frontRefs },
      { name: "backend", array: cardCategories[2], refs: backendRefs },
      { name: "databases", array: cardCategories[3], refs: dbRefs },
      { name: "tools", array: cardCategories[4], refs: toolsRefs },
    ],
    [cardCategories, integrationRefs, frontRefs, backendRefs, dbRefs, toolsRefs]
  );

  const backToGameScreen = useCallback(() => {
    if (!isMemoryGamePlayed || (isMemoryGamePlayed && wins !== 18)) {
      return setDisplayMemoryGameResult((prev) => !prev);
    }
    if (wins === 18) {
      setDisplayMemoryGameResult(false);
      resetGame();
      setProgress(() => wins - 1);
    }
  }, [isMemoryGamePlayed, wins]);

  useEffect(() => {
    if (isMemoryGamePlayed && displayMemoryGameResult) {
      setAllRefs([
        ...integrationRefs.current,
        ...frontRefs.current,
        ...backendRefs.current,
        ...dbRefs.current,
        ...toolsRefs.current,
      ]);
    }
  }, [isMemoryGamePlayed, displayMemoryGameResult]);

  ///////////////////////////////
  // 📌 FIX THIS FUNCTION!!!
  ///////////////////////////////

  const scrollToResultCard = useCallback(
    (
      // containerRef: MutableRefObject<HTMLDivElement>,
      resultCard: HTMLDivElement
    ) => {
      const resultCardTop = resultCard?.getBoundingClientRect().top;
      const resultCardBtm = resultCard?.getBoundingClientRect().bottom;
      const isInViewport = resultCardBtm < height && resultCardTop > 150;
      // const viewportStart = 150;
      // const viewportEnd = height;
      // const isBelowViewPort = resultCardTop >= viewportEnd;
      // const isAboveViewPort = resultCardBtm <= viewportStart;
      // const container = containerRef.current;

      if (!isInViewport) {
        resultCard?.scrollIntoView({ block: "center" });
      }
    },
    [height]
  );

  const flipResultCard = (resultCard: HTMLDivElement) => {
    setTimeout(() => {
      resultCard?.classList.add("flip-card-x");
    }, 1000);
  };

  const findCorrespondingResult = (card: ICard) => {
    // console.log("function findCCorrespondingResult is running");
    const wonCard = allPossibleResults.find(
      (resultCard) => resultCard.name === card?.name
    );
    if (wonCard !== undefined) {
      // console.log("allrefs", allRefs);
      const resultCard = allRefs.find((ref) => ref?.dataset.card === card.name);
      // console.log("updated flippedResults array", flippedResults);
      update(resultCard);
      setProgress(() => wins);
      scrollToResultCard(resultCard);
      flipResultCard(resultCard);
    }
  };

  const handleClassName = (el: ICardElement): string => {
    if (flippedResults.some((card) => card.dataset.card === el.name)) {
      return "flip-card-x";
    } else return "";
  };

  useEffect(() => {
    if (!isMemoryGamePlayed || (isMemoryGamePlayed && !displayMemoryGameResult))
      return;
    findCorrespondingResult(flipped[flipped.length - 1]);
  }, [isMemoryGamePlayed, displayMemoryGameResult, flipped, allRefs]);

  useEffect(() => {
    setConfettiCanvasHeight(resultsContainerRef?.current?.scrollHeight);
  }, [width]);

  return (
    <ResultContainer
      displayResult={displayMemoryGameResult}
      isGamePlayed={isMemoryGamePlayed}
      wins={wins}
      ref={resultsContainerRef}
    >
      <CloseBtn onClick={backToGameScreen}>
        <CloseBtnSpan>[ x ]</CloseBtnSpan>
      </CloseBtn>
      {progress === 18 && confettiCanvasHeight && (
        <Confetti width={width} height={confettiCanvasHeight} />
      )}
      {!isMemoryGamePlayed ? (
        <StackPageHeading />
      ) : (
        <GameResultsHeading progress={progress} wins={wins} />
      )}
      <TableContainer>
        {stackTables.map((table, i) => {
          return (
            <StackColumn
              key={i}
              handleClassName={handleClassName}
              columnName={table.name}
              array={table.array}
              refs={table.refs}
            />
          );
        })}
      </TableContainer>
    </ResultContainer>
  );
};

export default Results;
