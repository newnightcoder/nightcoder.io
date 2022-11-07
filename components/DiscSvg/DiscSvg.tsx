import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import { useCallback, useRef, useState } from "react";
import { useIsoMorphicLayoutEffect } from "../../hooks/useIsoMorphicLayoutEffect";
import { useWindowSize } from "../../hooks/useWindowSize";
import { CANVAS_PATH, CSS_PATH, SVG_PATH, WEBGL_PATH } from "./Paths";

if (typeof window !== undefined) {
  gsap.registerPlugin(MotionPathPlugin);
}

const DiscSvg = () => {
  const { width, height } = useWindowSize();
  const ref = useRef<SVGGElement | null>(null);
  const [orbit] = useState<GSAPTimeline>(() => gsap.timeline());

  const colors = {
    disc1: "rgb(136,206,2)",
    disc1_grey: "#707176",
    planetPurple: "#6600ff",
    planetSalmon: "#983334",
    planetBlue: "#1290ff",
  };

  const interact = useCallback(() => {
    orbit.isActive() ? orbit.pause() : orbit.resume();
  }, [orbit]);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) {
      orbit.to("#css", {
        duration: 20,
        repeat: -1,
        // repeatDelay: 3,
        yoyo: false,
        ease: "none",
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      });
      ref.current.addEventListener("click", interact);
    }
  }, [ref]);

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
        // data-svg-origin="-165 -148.341064453125"
        // transform="matrix(1,0,0,1,506.5,0)"
        transform={`matrix(1, 0, 0, 1 , ${width - 50}, 0)`}
      >
        {/*////////////////////////////////// 
    //// GROUP CIRCLE N°5 + PLANETS /////
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
          // data-svg-origin="0 94.1168212890625"
          // transform="matrix(1,0,0,1,141.7367,0)"
        >
          {/* PLANET GRADIENT BLUE-PINK */}
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="50"
            // fill={colors.planetBlue}
            fill="url(#grad2)"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              transformOrigin: "0px 0px",
            }}
            // data-svg-origin="-670 0"
            transform={`matrix(1, 0, 0, 1, ${-width + width / 3.5} , -25)`}
          ></circle>

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
            // cx="0"
            // cy="50"
            // r="550"
          >
            <path
              id="path"
              d="M -550, 50 a 550, 550 0 1,0 1100, 0 a 550, 550 0 1, 0 -1100, 0 z"
              fill="none"
              strokeWidth="3"
              stroke="url(#grad-grey)"
              opacity="0.925397"
            />
          </g>

          {/* C5 - SATELLITE VUE */}
          <g
            className="m1Orb orb4b"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="20 20"
            transform="matrix(1.5,0,0,1.5,-493.56949,-266.10541)"
          >
            <image
              xlinkHref="https://greensock.com/images/header/logoVue.png"
              width="40"
              height="40"
            ></image>
          </g>
          {/* C5 - SATELLITE CSS */}
          <g id="css" className="m1Orb orb4" ref={ref}>
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
          // data-svg-origin="35.68157958984375 50"
          // transform="matrix(1,0,0,1,70.8683,-4.6561)"
        >
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
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 0.75,
                transformOrigin: "0px 0px",
              }}
              // data-svg-origin="-550 25"
              // transform={`matrix(1, 0, 0, 1, ${-width + 200}, ${height - 150})`}
            ></circle>
          </g>

          {/* CIRCLE N°4 */}
          <circle
            className="c1_line c1_line3"
            cx="0"
            cy="50"
            r="450"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad-grey)"
            opacity="0.925397"
          ></circle>

          {/* SATELLITE REACT */}
          <g
            className="m1Orb orb3c"
            style={{
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
              // src={"https://greensock.com/images/header/logoAngular.png"}
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
    //// GROUP CIRCLE N°3 + PLANETS /////
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
          // data-svg-origin="16.3858642578125 74.372314453125"
          // transform="matrix(1,0,0,1,47.2456,-9.3122)"
        >
          {/* PLANET VIOLET */}
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="15"
            fill={colors.planetPurple}
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 0.5,
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="-445 35"
            transform="matrix(-0.64026,0.76816,-0.76816,-0.64026,-273.0301,399.2403)"
          ></circle>

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

        {/*////////////////////////////////// 
    //// GROUP CIRCLE N°2 + SATELLITE //////
    /////////////////////////////////////*/}
        <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            transformOrigin: "0px 0px",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
          // data-svg-origin="-0.904937744140625 65.42562866210938"
          // transform="matrix(1,0,0,1,35.4342,-13.9683)"
        >
          {/* CIRCLE N°2 */}
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="280"
            // fill="url(#grad1)"
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
          // data-svg-origin="0 50"
          // transform="matrix(1,0,0,1,20.2481,-27.9365)"
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
