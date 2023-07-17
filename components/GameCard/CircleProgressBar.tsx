import { CircleSvg, ProgressCircle } from "./ResultsStyled";

const CircleProgressBar = ({ progress, wins }) => {
  return (
    <CircleSvg>
      <circle
        strokeWidth="9"
        stroke="dimgray"
        fill="none"
        cx="75"
        cy="75"
        r="60"
      />
      <ProgressCircle
        progress={progress}
        wins={wins}
        pathLength={18}
        transform="rotate(-90, 75, 75)"
      />
      <foreignObject x="0" y="0" height="150" width="150">
        <div
          style={{
            height: "100%",
            width: "100%",
            // color: "#f5f5f5",
            color: "#000",
            display: "grid",
            placeItems: "center",
            fontSize: "2rem",
          }}
        >
          {wins}
        </div>
      </foreignObject>
    </CircleSvg>
  );
};

export default CircleProgressBar;
