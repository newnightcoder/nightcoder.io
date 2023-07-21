import { GameHeading } from "./GameCardStyled";
import { CircleSvg, ProgressCircle } from "./ResultsStyled";

const CircleProgressBar = ({ progress, wins }) => {
  return (
    <CircleSvg>
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(0)">
          <stop stopColor="#ff4d4d" offset={"0%"} />
          <stop stopColor="#e1b106" offset={"100%"} />
        </linearGradient>
      </defs>
      <circle
        strokeWidth="9"
        stroke="dimgray"
        fill="none"
        cx="75"
        cy="75"
        r="60"
      />
      <ProgressCircle
        stroke="url(#gradient)"
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
            display: "grid",
            placeItems: "center",
            // fontSize: "2rem",
          }}
        >
          <GameHeading fontSize={3} color={"blue"} shadow={false}>
            {wins}
          </GameHeading>
        </div>
      </foreignObject>
    </CircleSvg>
  );
};

export default CircleProgressBar;
