// import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { gsap, MotionPathPlugin } from "../../animations/gsap";
import {
  useIsoMorphicLayoutEffect,
  useTween,
  useWindowSize,
} from "../../hooks";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(MotionPathPlugin);
// }

const DiscSvg = () => {
  const { width, height, setSize } = useWindowSize();

  // circles
  const c5Ref = useRef<SVGCircleElement>(null);
  const c4Ref = useRef<SVGCircleElement>(null);
  const c3Ref = useRef<SVGCircleElement>(null);
  const c2Ref = useRef<SVGCircleElement>(null);
  // satellites
  const nextRef = useRef<SVGGElement>(null);
  const awsRef = useRef<SVGGElement>(null);
  const sqlRef = useRef<SVGGElement>(null);
  const nodeRef = useRef<SVGGElement>(null);
  const exRef = useRef<SVGGElement>(null);
  const jsRef = useRef<SVGGElement>(null);
  const tsRef = useRef<SVGGElement>(null);
  const reactRef = useRef<SVGGElement>(null);
  const reduxRef = useRef<SVGGElement>(null);

  const positions = {
    aws: 0.2,
    next: 0.25,
    sql: 0.2,
    ex: 0.25,
    node: 0.2,
    js: 0.2,
    ts: 0.25,
    react: 0.225,
    redux: 0.265,
  };

  // Tweens
  const [tweenAws] = useTween(
    MotionPathPlugin.convertToPath("#circle-5")[0],
    "#circle-5",
    awsRef,
    positions.aws
  );
  const [tweenNext] = useTween(
    MotionPathPlugin.convertToPath("#circle-5")[0],
    "#circle-5",
    nextRef,
    positions.next
  );
  const [tweenSql] = useTween(
    MotionPathPlugin.convertToPath("#circle-4")[0],
    "#circle-4",
    sqlRef,
    positions.sql
  );
  const [tweenNode] = useTween(
    MotionPathPlugin.convertToPath("#circle-4")[0],
    "#circle-4",
    nodeRef,
    positions.node
  );
  const [tweenEx] = useTween(
    MotionPathPlugin.convertToPath("#circle-4")[0],
    "#circle-4",
    exRef,
    positions.ex
  );
  const [tweenJs] = useTween(
    MotionPathPlugin.convertToPath("#circle-2")[0],
    "#circle-2",
    jsRef,
    positions.js
  );
  const [tweenTs] = useTween(
    MotionPathPlugin.convertToPath("#circle-2")[0],
    "#circle-2",
    tsRef,
    positions.ts
  );
  const [tweenReact] = useTween(
    MotionPathPlugin.convertToPath("#circle-3")[0],
    "#circle-3",
    reactRef,
    positions.react
  );
  const [tweenRedux] = useTween(
    MotionPathPlugin.convertToPath("#circle-3")[0],
    "#circle-3",
    reduxRef,
    positions.redux
  );

  const [timeline] = useState(() =>
    gsap.timeline({
      paused: true,
    })
  );

  const colors = {
    disc1: "rgb(136,206,2)",
    disc1_grey: "#707176",
    planetPurple: "#6600ff",
    planetSalmon: "#983334",
    planetBlue: "#1290ff",
  };

  const icons = {
    js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  };

  //////////////////////////////
  //    EVENT LISTENERS      //
  /////////////////////////////

  useEffect(() => {
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [window]);

  // const handleHover = () => {
  //   orbitCss?.isActive() ? orbitCss.pause() : orbitCss?.resume();
  // };

  // useEffect(() => {
  //   nextRef?.current?.addEventListener("mouseover", handleHover);
  // }, [nextRef, orbitCss]);

  // useEffect(() => {
  //   return () => {
  //     nextRef?.current?.removeEventListener("mouseover", handleHover);
  //   };
  // }, [nextRef]);

  //  PLAY TWEENS + CLEANUP

  useIsoMorphicLayoutEffect(() => {
    if (
      tweenAws &&
      tweenSql &&
      tweenNode &&
      tweenNext &&
      tweenEx &&
      tweenJs &&
      tweenTs &&
      tweenReact &&
      tweenRedux
    ) {
      timeline
        .add(tweenAws?.seek(0), 0)
        .add(tweenNext?.seek(0), 0)
        .add(tweenSql?.seek(0), 0)
        .add(tweenNode?.seek(0), 0)
        .add(tweenEx?.seek(0), 0)
        .add(tweenJs?.seek(0), 0)
        .add(tweenTs?.seek(0), 0)
        .add(tweenReact?.seek(0), 0)
        .add(tweenRedux?.seek(0), 0)
        .pause();
    }
    return () => {
      timeline.kill();
    };
  }, [
    tweenAws,
    tweenSql,
    tweenNode,
    tweenNext,
    tweenEx,
    tweenJs,
    tweenTs,
    tweenReact,
    tweenRedux,
  ]);

  return (
    <svg id="ringSVG" height="100%" width="100%">
      <defs>
        <linearGradient id="grad-green" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="10%"
            style={{ stopColor: "rgb(255,255,0)", stopOpacity: 0.9 }}
          ></stop>
          <stop
            offset="99%"
            style={{ stopColor: "rgb(0, 255, 0)", stopOpacity: 0.1 }}
          ></stop>
        </linearGradient>
        <linearGradient id="grad-grey" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="10%"
            style={{ stopColor: "rgb(140,140,140)", stopOpacity: 0.9 }}
          ></stop>
          <stop
            offset="99%"
            style={{ stopColor: "rgb(55, 55, 55)", stopOpacity: 0.6 }}
          ></stop>
        </linearGradient>
        <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(0, 100, 255)", stopOpacity: 0.7 }}
          ></stop>
          <stop
            offset="70%"
            style={{ stopColor: "rgb(200, 25, 100)", stopOpacity: 0.7 }}
          ></stop>
        </linearGradient>
      </defs>

      {/*///////////////// 
      //// FULL SVG //////
      //////////////////*/}
      <g
        className="m1_stage"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transformOrigin: "0px 0px",
          border: "4px solid red",
        }}
        transform={`matrix(1, 0, 0, 1 , ${width - 50}, 0)`}
      >
        {/* PLANET GRADIENT BLUE-PINK */}
        <g>
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="50"
            fill="url(#grad2)"
            style={{
              opacity: 1,
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            transform={`matrix(1, 0, 0, 1, ${-width + width / 3.5} , -25)`}
          ></circle>
        </g>

        {/* PLANET GREEN */}
        <g
          transform={`matrix(1, 0, 0, 1, ${-width + width / 6}, ${
            height - 150
          })`}
        >
          <circle
            cx="0"
            cy="50"
            r="35"
            fill="none"
            stroke={colors.disc1}
            opacity="0.75"
          ></circle>
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="20"
            fill={"url(#grad-green)"}
            style={{
              opacity: 0.75,
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
          ></circle>
        </g>
        {/* PLANET VIOLET */}
        <g>
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="15"
            fill={colors.planetPurple}
            style={{
              opacity: 0.5,
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="-445 35"
            transform="matrix(-0.64026,0.76816,-0.76816,-0.64026,-273.0301,399.2403)"
          ></circle>
        </g>

        {/*////////////////////////////////// 
        ////    CIRCLE N°5 + PLANETS    /////
        ///////////////////////////////////*/}
        <g>
          {/* CIRCLE N°5 */}
          <circle
            ref={c5Ref}
            id="circle-5"
            cx="0"
            cy="50"
            r="550"
            fill="none"
            strokeWidth="3"
            stroke="url(#grad-grey)"
            opacity="0.925397"
          ></circle>

          {/* C5 - SATELLITE AWS */}
          <g ref={awsRef}>
            {/* <circle r={80} stroke="red"></circle> */}
            <svg height="90" width="90">
              <defs>
                <clipPath id="clip">
                  <circle cx={45} cy={45} r={20} fill="none"></circle>
                </clipPath>
              </defs>
              <image
                xlinkHref={icons.aws}
                width="90"
                height="90"
                clipPath="url(#clip)"
              ></image>
            </svg>
          </g>

          {/* C5 - SATELLITE NEXTJS */}
          <g ref={nextRef}>
            <circle r={25} cx={22.5} cy={22.5} fill="white"></circle>
            <svg height="45" width="45">
              <defs>
                <clipPath id="clip-next">
                  <circle cx={22.5} cy={22.5} r={22.5}></circle>
                </clipPath>
              </defs>
              <image
                xlinkHref={icons.next}
                width="45"
                height="45"
                clipPath="url(#clip-next)"
              ></image>
            </svg>
          </g>
        </g>

        {/*////////////////////////////////// 
        //// GROUP CIRCLE N°4 + PLANETS /////
        ///////////////////////////////////*/}
        <g>
          {/* CIRCLE N°4 */}
          <circle
            ref={c4Ref}
            id="circle-4"
            cx="0"
            cy="50"
            r="450"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad-grey)"
            opacity="0.925397"
          ></circle>

          {/* SATELLITE NODE */}
          <g ref={nodeRef} className="m1Orb orb3c">
            <image xlinkHref={icons.node} width="50" height="50"></image>
          </g>

          {/* SATELLITE EXPRESS */}
          <g ref={exRef}>
            <svg width="40" height="40">
              <circle cx="20" cy="20" r="20" fill="white"></circle>
              <image xlinkHref={icons.express} width="40" height="40"></image>
            </svg>
          </g>

          {/* SATELLITE SQL */}
          <g className="m1Orb orb3" ref={sqlRef}>
            <circle
              cx="22.5"
              cy="22.5"
              r="30"
              stroke="#00618A"
              strokeWidth="3"
              fill="none"
            ></circle>
            <svg width="45" height="45">
              <defs>
                <clipPath id="clip-sql">
                  <circle cx={22.5} cy={22.5} r={22.5}></circle>
                </clipPath>
              </defs>
              <image
                xlinkHref={icons.sql}
                width="45"
                height="45"
                clipPath="url(#clip-sql)"
              ></image>
            </svg>
            {/* <path fill="#fff" opacity="0.7" d={CANVAS_PATH}></path> */}
          </g>
        </g>

        {/*////////////////////////////////// 
        ////   CIRCLE N°3 + SATELLITES  /////
        ///////////////////////////////////*/}
        <g>
          {/* CIRCLE N°3 */}
          <circle
            ref={c3Ref}
            id="circle-3"
            cx="0"
            cy="50"
            r="360"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad-grey)"
            opacity="0.925397"
          ></circle>

          {/* SATELLITE REACT */}
          <g ref={reactRef}>
            <image xlinkHref={icons.react} height="55" width="55"></image>
          </g>

          {/* SATELLITE REDUX */}
          <g ref={reduxRef}>
            <image xlinkHref={icons.redux} height="35" width="35"></image>
          </g>
        </g>

        {/*///////////////////////////////// 
        ////  CIRCLE N°2 + SATELLITE //////
        //////////////////////////////////*/}
        <g>
          {/* CIRCLE N°2 */}
          <circle
            cx="0"
            cy="50"
            r="280"
            fill="url(#grad-grey)"
            opacity="0.925397"
          ></circle>
          <circle
            ref={c2Ref}
            id="circle-2"
            cx="0"
            cy="50"
            r="279"
            fill="none"
            strokeWidth="3"
            stroke="url(#grad-grey)"
            opacity="1"
          ></circle>

          {/* SATELLITE JS */}
          <g ref={jsRef}>
            {/* <circle cx="30" cy="30" r="40" fill="yellow"></circle> */}
            <image xlinkHref={icons.js} height="60" width="60"></image>
          </g>
          {/* SATELLITE TS */}
          <g ref={tsRef}>
            {/* <circle cx="30" cy="30" r="40" fill="yellow"></circle> */}
            <image xlinkHref={icons.ts} height="60" width="60"></image>
          </g>
        </g>

        {/*//////////////////////// 
        //// GROUP CIRCLE N°1 /////
        /////////////////////////*/}
        <g>
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="80"
            fill={colors.disc1_grey}
            opacity=".75"
          ></circle>
        </g>
      </g>
    </svg>
  );
};

export default DiscSvg;
