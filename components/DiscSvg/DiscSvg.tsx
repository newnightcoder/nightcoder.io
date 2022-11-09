import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIsoMorphicLayoutEffect, useWindowSize } from "../../hooks";
import { CANVAS_PATH, CSS_PATH, SVG_PATH, WEBGL_PATH } from "./Paths";

if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

const DiscSvg = () => {
  const { width, height, setSize } = useWindowSize();
  const c5Ref = useRef<SVGPathElement | null>(null);
  const [rawPathC5, setRawPathC5] = useState<gsap.plugins.RawPath | null>(null);
  const [cacheRawPathC5, setCacheRawPathC5] =
    useState<gsap.plugins.RawPath | null>(null);
  const [vueStart, setVueStart] =
    useState<gsap.plugins.getRelativePositionObject>(null);
  const cssRef = useRef<SVGGElement | null>(null);
  const vueRef = useRef<SVGGElement | null>(null);
  const [vueX, setVueX] = useState<number | null>(null);
  const [vueY, setVueY] = useState<number | null>(null);
  const [orbitCss, setOrbitCss] = useState<gsap.core.Tween | null>(null);
  const [orbitVue, setOrbitVue] = useState<gsap.core.Timeline>(() =>
    gsap.timeline({
      paused: true,
    })
  );
  const [orbitCanvas] = useState<gsap.core.Tween>();

  const colors = {
    disc1: "rgb(136,206,2)",
    disc1_grey: "#707176",
    planetPurple: "#6600ff",
    planetSalmon: "#983334",
    planetBlue: "#1290ff",
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

  const handleHover = () => {
    orbitCss?.isActive() ? orbitCss.pause() : orbitCss?.resume();
  };

  useEffect(() => {
    cssRef?.current?.addEventListener("mouseover", handleHover);
  }, [cssRef, orbitCss]);

  useEffect(() => {
    return () => {
      cssRef?.current?.removeEventListener("mouseover", handleHover);
    };
  }, [cssRef]);

  const getRawPathC5 = useCallback(() => {
    // if (c5Ref.current) {
    //   setRawPathC5(() => MotionPathPlugin.getRawPath("#circle-5"));
    // }
  }, [c5Ref]);

  const saveCacheRawPathC5 = useCallback(() => {
    if (rawPathC5) {
      setCacheRawPathC5(() =>
        MotionPathPlugin.cacheRawPathMeasurements(rawPathC5)
      );
    }
  }, [rawPathC5]);

  const placeVueSat = useCallback(() => {
    if (cacheRawPathC5) {
      setVueStart(
        () =>
          MotionPathPlugin.getPositionOnPath(
            rawPathC5,
            0.2,
            true
          ) as gsap.plugins.getRelativePositionObject
      );
    }
  }, [cacheRawPathC5]);

  useIsoMorphicLayoutEffect(() => {
    if (c5Ref.current) {
      setRawPathC5(() => MotionPathPlugin.getRawPath("#circle-5"));
    }
  }, [c5Ref]);

  useIsoMorphicLayoutEffect(() => {
    if (rawPathC5) {
      setCacheRawPathC5(() =>
        MotionPathPlugin.cacheRawPathMeasurements(rawPathC5)
      );
    }
  }, [rawPathC5]);

  useIsoMorphicLayoutEffect(() => {
    placeVueSat();
    console.log("cache", cacheRawPathC5);
  }, [cacheRawPathC5]);

  useIsoMorphicLayoutEffect(() => {
    if (vueStart) {
      console.log("vue start", vueStart);
      setVueX(vueStart.x);
      setVueY(vueStart.y);
    }
  }, [vueStart]);

  //////////////////////////////
  //    TWEEN CREATION       //
  /////////////////////////////

  const createTweenCss = useCallback(() => {
    if (cssRef.current) {
      setOrbitCss(
        gsap.to(cssRef.current, {
          duration: 45,
          repeat: -1,
          paused: true,
          // repeatDelay: 3,
          yoyo: false,
          ease: "none",
          motionPath: {
            path: "#circle-5",
            align: "#circle-5",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0.2,
            end: 1.2,
          },
        })
      );
    }
  }, [cssRef]);

  // const createTweenVue = useCallback(() => {
  //   if (vueRef.current && vueStart) {
  //     // setOrbitVue(
  //     orbitVue
  //       .set(vueRef.current, {
  //         x: vueStart.x,
  //         y: vueStart.y,
  //         rotation: vueStart.angle,
  //       })
  //       .to(vueRef.current, {
  //         duration: 45,
  //         repeat: -1,
  //         // repeatDelay: 3,
  //         yoyo: false,
  //         ease: "none",
  //         motionPath: {
  //           path: "#circle-5",
  //           align: "#circle-5",
  //           autoRotate: true,
  //           alignOrigin: [0.5, 0.5],
  //         },
  //       });
  //     // );
  //   }
  // }, [vueRef, vueStart]);

  useIsoMorphicLayoutEffect(() => {
    createTweenCss();
    // createTweenVue();
  }, [cssRef]);

  //////////////////////////////
  //  PLAY TWEENS + CLEANUP   //
  /////////////////////////////

  useIsoMorphicLayoutEffect(() => {
    if (vueRef.current) {
      // setOrbitVue(
      orbitVue.to(vueRef.current, {
        duration: 45,
        repeat: -1,
        // repeatDelay: 3,
        yoyo: false,
        ease: "none",
        motionPath: {
          path: "#circle-5",
          align: "#circle-5",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 0.25,
          end: 1.25,
        },
      });
    }
  }, [vueRef]);

  useIsoMorphicLayoutEffect(() => {
    if (orbitCss) {
      orbitCss.play();
      orbitVue.play();
    }
    return () => {
      orbitCss?.kill();
      orbitVue?.kill();
    };
  }, [orbitCss, orbitVue]);

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
        }}
        transform={`matrix(1, 0, 0, 1 , ${width / 2}, 0)`}
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
        <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            translate: "none",
            rotate: "none",
            scale: "none",
            transformOrigin: "0px 0px",
          }}
        >
          {/* CIRCLE N°5 */}
          <g
            className="c1_line c1_line4"
            style={{
              opacity: 1,
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            // 📌 circle svg turned into path to animate satellites along the path 😎
            // cx="0"
            // cy="50"
            // r="550"
          >
            <path
              ref={c5Ref}
              id="circle-5"
              d="M -550, 50 a 550, 550 0 1,0 1100, 0 a 550, 550 0 1, 0 -1100, 0 z" // path deduced from svg circle coordinates (cx, cy, radius) 😎
              fill="none"
              strokeWidth="3"
              stroke="url(#grad-grey)"
              opacity="0.925397"
            />
          </g>

          {/* C5 - SATELLITE VUE */}
          <g
            ref={vueRef}
            className="m1Orb orb4b test"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            // data-svg-origin="20 20"
            // transform={`matrix(1,0,0,1,${vueX}, ${vueY})`}
          >
            <image
              xlinkHref="https://greensock.com/images/header/logoVue.png"
              width="40"
              height="40"
            ></image>
          </g>
          {/* C5 - SATELLITE CSS */}
          <g id="css" className="m1Orb orb4 test" ref={cssRef}>
            <circle cx="15" cy="10.5" r="25" fill="#006bca"></circle>
            <path fill="#fff" opacity="0.75" d={CSS_PATH}></path>
          </g>
        </g>

        {/*////////////////////////////////// 
        //// GROUP CIRCLE N°4 + PLANETS /////
        ///////////////////////////////////*/}
        <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            transformOrigin: "0px 0px",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
        >
          {/* CIRCLE N°4 */}
          <g className="c1_line c1_line3">
            <path
              d="M -450,50 a 450,450 0 1, 0 900,0 a 450,450 0 1,0 -900,0 z"
              fill="none"
              strokeWidth="2"
              stroke="url(#grad-grey)"
              opacity="0.925397"
            />
          </g>

          {/* SATELLITE REACT */}
          <g
            className="m1Orb orb3c"
            style={{
              opacity: 1,
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="20 20"
            transform="matrix(1.5,0,0,1.5,144.51104,435.7473)"
          >
            <image
              xlinkHref="https://greensock.com/images/header/logoReact.png"
              width="40"
              height="40"
            ></image>
          </g>

          {/* SATELLITE ANGULAR */}
          <g
            className="m1Orb orb3b"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="20 20"
            transform="matrix(1.5,0,0,1.5,-312.56838,-320.2412)"
          >
            <image
              xlinkHref="https://greensock.com/images/header/logoAngular.png"
              width="40"
              height="40"
            ></image>
          </g>

          {/* SATELLITE CANVAS */}
          <g
            className="m1Orb orb3"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="20 8"
            transform="matrix(1.5,0,0,1.5,-166.29174,469.04007)"
          >
            <circle
              cx="20"
              cy="8"
              r="24"
              stroke="#bc7c00"
              strokeWidth="3"
              fill="#cc971b"
            ></circle>
            <path fill="#fff" opacity="0.7" d={CANVAS_PATH}></path>
          </g>
        </g>

        {/*////////////////////////////////// 
        ////   CIRCLE N°3 + SATELLITES  /////
        ///////////////////////////////////*/}
        <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            transformOrigin: "0px 0px",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
        >
          {/* CIRCLE N°3 */}
          <circle
            className="c1_line c1_line2"
            cx="0"
            cy="50"
            r="360"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad-grey)"
            opacity="0.925397"
          ></circle>

          {/* SATELLITE WEBGL */}
          <g
            className="m1Orb orb2"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="18.5 7"
            transform="matrix(1.5,0,0,1.5,103.56031,375.48825)"
          >
            <circle
              cx="18.5"
              cy="7"
              r="24.5"
              fill="#983334"
              strokeWidth="2.5"
              stroke="#b9393a"
            ></circle>
            <path fill="#fff" opacity="0.7" d={WEBGL_PATH}></path>
          </g>
        </g>

        {/*///////////////////////////////// 
        ////  CIRCLE N°2 + SATELLITE //////
        //////////////////////////////////*/}
        <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            transformOrigin: "0px 0px",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
        >
          {/* CIRCLE N°2 */}
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="280"
            fill="url(#grad-grey)"
            opacity="0.925397"
          ></circle>
          <circle
            className="c1_line c1_line1"
            cx="0"
            cy="50"
            r="279"
            fill="none"
            strokeWidth="3"
            stroke="url(#grad-grey)"
            opacity="1"
          ></circle>

          {/* SATELLITE SVG PURPLE */}
          <g
            className="m1Orb orb1"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="12.5 7"
            transform="matrix(1.5,0,0,1.5,48.49365,314.96729)"
          >
            <circle cx="12.5" cy="7" r="17" fill={colors.planetPurple}></circle>
            <circle
              cx="12.5"
              cy="7"
              r="20"
              fill="none"
              stroke={colors.planetPurple}
            ></circle>
            <path fill="#fff" opacity="0.7" d={SVG_PATH}></path>
          </g>
        </g>

        {/*//////////////////////// 
        //// GROUP CIRCLE N°1 /////
        /////////////////////////*/}
        <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            transformOrigin: "0px 0px",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
        >
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
