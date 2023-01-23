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
      .map((el) => {
        return { el, sort: Math.random() };
      })
      .sort((a, b) => a.sort - b.sort)
      .map((el) => el.el);
  };

  const svgArray = duplicateArray(svgMapToArray, 2);
  const svgArray2 = svgArray.splice(0, 14);

  useEffect(() => {
    setShuffledSvgArr1(() => shuffleArray(svgArray));
    setShuffledSvgArr2(() => shuffleArray(svgArray2));
  }, []);

  // let card = [];

  const flipCard = useCallback(
    (el: MutableRefObject<HTMLDivElement[]>, index: number) => {
      const currentCard: ICard = {
        name: el.current[index].dataset.card,
        domEl: el.current[index],
        index,
      };
      if (cardCount === 2) return;
      currentCard.domEl.classList.toggle("flip-card");
      console.log(currentCard.name);
      setFlippedCards(() => [...flippedCards, currentCard]);
      setCardCount(() => cardCount + 1);
    },
    [cardCount, flippedCards, setFlippedCards, setCardCount]
  );

  const compare = useCallback(() => {
    if (cardCount < 2) return;
    console.log(flippedCards);
    if (flippedCards[0].name === flippedCards[1].name) {
      return console.log("you won");
    } else {
      console.log("you lost");
      setTimeout(() => {
        flippedCards.forEach((card) =>
          card.domEl.classList.remove("flip-card")
        );
        setFlippedCards(() => flippedCards.splice(flippedCards.length, 2));
      }, 2000);
    }
    setCardCount(0);
  }, [cardCount, flippedCards, setFlippedCards, setCardCount]);

  return { shuffledSvgArr1, shuffledSvgArr2, flipCard, compare };
};

export default useCardGame;
