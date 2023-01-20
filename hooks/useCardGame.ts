import { svgMap } from "../components/GameCard/CardImgSvg";

const useCardGame = () => {
  const svgMapToArray = Object.values(svgMap).map((entry) => entry);

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

  const svgArray = duplicateArray(svgMapToArray, 2);

  const shuffledSvgArr = svgArray
    .map((el) => {
      return { el, sort: Math.random() };
    })
    .sort((a, b) => a.sort - b.sort)
    .map((el) => el.el);
  // this is the Schwartzian transform algo 🔥😎 - so cool because so easy to read and unbiased/efficient shuffle
  // NB: Fisher-Yates shuffle algo would be more efficient for large arrays
  // more here: https://stackoverflow.com/a/46545530/12209569

  return { shuffledSvgArr };
};

export default useCardGame;
