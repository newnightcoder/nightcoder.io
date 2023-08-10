import dynamic from "next/dynamic";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
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
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(wins - 1);
  // const [progress, setProgress] = useState(18);
  const { height, width } = useWindowSize();
  // 😎 nextjs dynamic import to import Confetti component (so that component resizes with window size)
  // Solution from https://github.com/alampros/react-confetti/issues/130#issuecomment-1297020799
  const Confetti = dynamic(() => import("react-confetti"), {
    ssr: false,
  });

  const stackTables = useMemo(
    () => [
      {
        name: "web integration",
        array: integrationArray,
        refs: integrationRefs,
      },
      { name: "front", array: frontArray, refs: frontRefs },
      { name: "backend", array: backendArray, refs: backendRefs },
      { name: "databases", array: dbArray, refs: dbRefs },
      { name: "tools", array: toolsArray, refs: toolsRefs },
    ],
    [
      integrationArray,
      integrationRefs,
      frontArray,
      frontRefs,
      backendArray,
      backendRefs,
      dbArray,
      dbRefs,
      toolsArray,
      toolsRefs,
    ]
  );

  const backToGameScreen = () => {
    if (!isMemoryGamePlayed || (isMemoryGamePlayed && progress !== 18)) {
      return setDisplayMemoryGameResult((prev) => !prev);
    }
    if (progress === 18) {
      setDisplayMemoryGameResult(false);
      setProgress(() => wins - 1);
      resetGame();
    }
  };

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

  const scrollToResultCard = (
    containerRef: MutableRefObject<HTMLDivElement>,
    resultRef: HTMLDivElement
  ) => {
    containerRef.current.scroll(
      0,
      height + (resultRef?.getBoundingClientRect().top - height)
    );
  };

  const findCorrespondingResult = (card: ICard) => {
    console.log("function findCCorrespondingResult is running");
    const wonCard = allPossibleResults.find(
      (resultCard) => resultCard.name === card?.name
    );
    if (wonCard !== undefined) {
      console.log("allrefs", allRefs);
      const resultCard = allRefs.find((ref) => ref?.dataset.card === card.name);
      console.log("updated flippedResults array", flippedResults);
      update(resultCard);
      setProgress(() => wins);
      // check if resultCard is in the viewPort:
      if (resultCard?.getBoundingClientRect().top > height) {
        scrollToResultCard(resultsContainerRef, resultCard);
      }
      setTimeout(() => {
        resultCard?.classList.add("flip-card-x");
      }, 1000);
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
      {progress === 18 && (
        <Confetti
          width={width}
          height={document.body.scrollHeight}
          // height={resultsContainerRef?.current?.getBoundingClientRect().height}
        />
      )}
      {!isMemoryGamePlayed ? (
        <StackPageHeading backToGame={backToGameScreen} />
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
