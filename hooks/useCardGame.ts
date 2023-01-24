import { MutableRefObject, useCallback, useEffect, useState } from "react";
import { svgMap } from "../components/GameCard/CardImgSvg";

interface ICard {
  domEl: HTMLDivElement;
  name: string;
  index: number;
}

const useCardGame = () => {
  const [shuffledSvgArr1, setShuffledSvgArr1] = useState([]);
  const [shuffledSvgArr2, setShuffledSvgArr2] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const svgMapToArray = Object.entries(svgMap).map((entry) => entry);

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

  const shuffleArray = (arr: unknown[]) => {
    // this is the Schwartzian transform algo 🔥😎 - so cool because so easy to read and unbiased/efficient shuffle
    // NB: Fisher-Yates shuffle algo would be more efficient for large arrays
    // more here: https://stackoverflow.com/a/46545530/12209569
    return arr
      .map((el) => ({ el, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((el) => el.el);
  };

  useEffect(() => {
    const svgArray = duplicateArray(svgMapToArray, 2);
    setShuffledSvgArr1(() => shuffleArray(svgArray));
  }, []);

  useEffect(() => {
    console.log(cardCount);

    compare();
  }, [cardCount]);

  const flipCard = useCallback(
    (el: MutableRefObject<HTMLDivElement[]>, index: number) => {
      const currentCard: ICard = {
        name: el.current[index].dataset.card,
        domEl: el.current[index],
        index,
      };
      const isAlreadyFlipped = flippedCards.some(
        (card) => card.index == currentCard.index
      );
      if (cardCount === 2) return;
      if (isAlreadyFlipped) return;
      setCardCount(() => cardCount + 1);
      console.log("flip");
      currentCard.domEl.classList.toggle("flip-card");
      setFlippedCards(() => [...flippedCards, currentCard]);
    },
    [cardCount, flippedCards, setFlippedCards, setCardCount]
  );

  const winRound = () => {
    console.log("you won");
    setTimeout(() => {
      resetCardCount();
    }, 2000);
  };

  const loseRound = () => {
    console.log("you lost");
    const length = flippedCards.length;
    setTimeout(() => {
      const wrongCards = flippedCards.splice(length - 2, 2);
      wrongCards.forEach((card) => card.domEl.classList.remove("flip-card"));
      setFlippedCards(() => flippedCards);
      resetCardCount();
    }, 2000);
  };

  const resetCardCount = () => {
    setCardCount(0);
  };

  const compare = useCallback(() => {
    if (cardCount !== 2) return;
    const length = flippedCards.length;
    const card1 = flippedCards[length - 1].name;
    const card2 = flippedCards[length - 2].name;
    console.log("compare");
    if (card1 === card2) {
      winRound();
    } else loseRound();
  }, [flippedCards, winRound, loseRound, resetCardCount]);

  return { shuffledSvgArr1, shuffledSvgArr2, flipCard, compare };
};

export default useCardGame;
