import { GradientBlue, GradientYellow } from "../../styles/home";

interface Props {
  text: string;
  isWord: boolean;
  classNameForGsap: string;
}

const SplitText = ({ text, isWord, classNameForGsap }: Props) => {
  return (
    <div
      style={{
        display: isWord ? "block" : "flex",
        gap: isWord ? "" : "10px",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {text.split(isWord ? "" : " ").map((unit, i) => {
        switch (unit) {
          case "Daniel":
            return (
              <GradientYellow className={classNameForGsap}>
                {unit}
              </GradientYellow>
            );
          case "frontend":
          case "web":
          case "developer":
            return (
              <GradientBlue className={classNameForGsap}>{unit}</GradientBlue>
            );
          case "👋🏾":
            return <div className={`${classNameForGsap} hand`}>{unit}</div>;
          default:
            return (
              <div className={classNameForGsap} key={i}>
                {unit}
              </div>
            );
        }
      })}
    </div>
  );
};

export default SplitText;
