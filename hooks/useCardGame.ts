import { MutableRefObject, useCallback, useEffect, useState } from "react";
import {
  backend,
  db,
  front,
  integration,
  tools,
} from "../components/GameCard/CardImgSvg";

export interface ICardElement {
  name: string;
  jsx: JSX.Element;
}

export interface ICard {
  domEl: HTMLDivElement;
  name: string;
  index: number;
  symbol?: JSX.Element;
}

const useCardGame = () => {
  const [shuffledCards, setShuffledCards] = useState<ICardElement[]>([]);
  const [round1, setRound1] = useState<ICardElement[]>([]);
  const [round2, setRound2] = useState<ICardElement[]>([]);
  const [round3, setRound3] = useState<ICardElement[]>([]);
  const [cardCount, setCardCount] = useState(0);
  const [flippedGameCards, setFlippedGameCards] = useState<ICard[]>([]);
  const [flippedResultCards, setFlippedResultCards] = useState<
    HTMLDivElement[]
  >([]);
  const [wins, setWins] = useState(0);
  const integrationArray = Object.entries(integration).map((entry) => ({
    name: entry[0],
    jsx: entry[1],
  }));
  const frontArray = Object.entries(front).map((entry) => ({
    name: entry[0],
    jsx: entry[1],
  }));
  const backendArray = Object.entries(backend).map((entry) => ({
    name: entry[0],
    jsx: entry[1],
  }));
  const dbArray = Object.entries(db).map((entry) => ({
    name: entry[0],
    jsx: entry[1],
  }));
  const toolsArray = Object.entries(tools).map((entry) => ({
    name: entry[0],
    jsx: entry[1],
  }));

  const cards = [
    ...integrationArray,
    ...frontArray,
    ...backendArray,
    ...dbArray,
    ...toolsArray,
  ];

  const duplicateArray = (arr: unknown[], duplicator: number) => {
    const length = arr.length;
    const newArray = [];
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < duplicator; j++) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  };

  const shuffleArray = (arr: ICardElement[]) => {
    // this is the Schwartzian transform algo 🔥😎 - so cool because so easy to read and unbiased/efficient shuffle
    // NB: Fisher-Yates shuffle algo would be more efficient for large arrays
    // more here: https://stackoverflow.com/a/46545530/12209569
    return arr
      .map((el) => ({ el, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((el) => el.el);
  };

  useEffect(() => {
    setShuffledCards(() => shuffleArray(cards));
  }, []);

  useEffect(() => {
    if (shuffledCards.length > 0) {
      const firstThird = shuffledCards.splice(0, 6);
      const secondThird = shuffledCards.splice(0, 6);
      const lastThird = shuffledCards.splice(0, 6);
      setRound1(() => shuffleArray(duplicateArray(firstThird, 2)));
      setRound2(() => shuffleArray(duplicateArray(secondThird, 2)));
      setRound3(() => shuffleArray(duplicateArray(lastThird, 2)));
    }
  }, [shuffledCards]);

  useEffect(() => {
    compare();
  }, [cardCount]);

  const flipCard = useCallback(
    (el: MutableRefObject<HTMLDivElement[]>, index: number) => {
      const currentCard: ICard = {
        name: el.current[index].dataset.card,
        domEl: el.current[index],
        index,
      };
      console.log("flippedGameCards", flippedGameCards);

      const isAlreadyFlipped = flippedGameCards.some(
        (card) => card.index == currentCard.index
      );
      if (cardCount === 2) return;
      if (isAlreadyFlipped) return;
      setCardCount(() => cardCount + 1);
      currentCard.domEl.classList.toggle("flip-card-y");
      setFlippedGameCards(() => [...flippedGameCards, currentCard]);
    },
    [cardCount, flippedGameCards, setFlippedGameCards, setCardCount]
  );

  const updateResultCardsArray = useCallback(
    (resultCard: HTMLDivElement) => {
      const update = [...flippedResultCards, resultCard].filter(
        (x) => x !== undefined
      );
      setFlippedResultCards(() => update);
    },
    [flippedResultCards, setFlippedResultCards]
  );

  const winRound = () => {
    setWins(() => wins + 1);
    setTimeout(() => {
      resetCardCount();
    }, 2000);
  };

  const loseRound = () => {
    const length = flippedGameCards.length;
    setTimeout(() => {
      const wrongCards = flippedGameCards.splice(length - 2, 2);
      wrongCards.forEach((card) => card.domEl.classList.remove("flip-card-y"));
      setFlippedGameCards(() => flippedGameCards);
      resetCardCount();
    }, 2000);
  };

  const resetCardCount = () => {
    setCardCount(0);
  };

  const compare = useCallback(() => {
    if (cardCount !== 2) return;
    const length = flippedGameCards.length;
    const card1 = flippedGameCards[length - 1].name;
    const card2 = flippedGameCards[length - 2].name;
    console.log("compare", card1, card2);
    if (card1 === card2) {
      winRound();
    } else loseRound();
  }, [flippedGameCards, winRound, loseRound]);

  return {
    round1,
    round2,
    round3,
    flipCard,
    compare,
    wins,
    flippedGameCards,
    setFlippedGameCards,
    flippedResultCards,
    integrationArray,
    frontArray,
    backendArray,
    dbArray,
    toolsArray,
    updateResultCardsArray,
  };
};

export default useCardGame;
