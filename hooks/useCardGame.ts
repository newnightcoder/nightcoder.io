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
  const [shuffledCards, setShuffledCards] = useState<ICardElement[] | null>(
    null
  );
  const [cardsPacks, setCardsPacks] = useState(() => [
    new Array<ICardElement>(),
  ]);
  const [cardCount, setCardCount] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flippedGameCards, setFlippedGameCards] = useState<ICard[]>([]);
  const [flippedResultCards, setFlippedResultCards] = useState<
    HTMLDivElement[]
  >([]);
  const [wins, setWins] = useState(0);
  const allCategories = [integration, front, backend, db, tools];

  const createCardsCategories = (array: []) => {
    const cards = [];
    array.forEach((el) => {
      cards.push(
        Object.entries(el).map((entry) => ({
          name: entry[0],
          jsx: entry[1],
        }))
      );
    });
    console.log("cards from createCardsCategory function", cards);
  };

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
    // createCardsCategories(allCategories);
    setShuffledCards(() => shuffleArray(cards));
  }, []);

  const createCardPacks = (cards: ICardElement[]) => {
    if (!cards) return;
    const packs = [];
    for (let i = 6; i <= cards.length; i += 6) {
      // iteration 6 by 6 😉
      const newPack = cards.slice(i - 6, i);
      packs.push(duplicateArray(newPack, 2));
    }
    setCardsPacks(() => packs);
  };

  useEffect(() => {
    createCardPacks(shuffledCards);
  }, [shuffledCards]);

  useEffect(() => {
    compare();
    console.log(cardCount);
  }, [cardCount]);

  const flipCard = useCallback(
    (el: MutableRefObject<HTMLDivElement[]>, index: number) => {
      const currentCard: ICard = {
        name: el.current[index].dataset.card,
        domEl: el.current[index],
        index,
      };
      const isAlreadyFlipped = flippedGameCards.some(
        (card) => card.index == currentCard.index
      );
      if (cardCount >= 2 || isAlreadyFlipped) return;
      const newCount = cardCount + 1;
      // setCardCount((prevCount) => prevCount + 1);
      setCardCount(newCount);
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
      setCardCount(0);
    }, 2000);
  };

  const loseRound = () => {
    const length = flippedGameCards.length;
    setTimeout(() => {
      const wrongCards = [...flippedGameCards.splice(length - 2, 2)];
      console.log("flippedGameCards", flippedGameCards);
      wrongCards.forEach((card) => card.domEl.classList.remove("flip-card-y"));
      setFlippedGameCards(() =>
        flippedGameCards.filter((card) => !wrongCards.includes(card))
      );
      setCardCount(0);
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
      console.log("it's a win!");
    } else {
      loseRound();
      console.log("you lost");
    }
  }, [cardCount, flippedGameCards, winRound, loseRound]);

  return {
    cardsPacks,
    flipCard,
    compare,
    setWins,
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
    setFlippedResultCards,
  };
};

export default useCardGame;
