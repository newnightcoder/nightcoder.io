import { useWindowSize } from "../../hooks/useWindowSize";
import { CANVAS_PATH, CSS_PATH, SVG_PATH, WEBGL_PATH } from "./Paths";

const DiscSvg = () => {
  const { width, height } = useWindowSize();

  return (
    <svg
      // className="fs"
      id="ringSVG"
      style={{
        height: "100%",
        width: "100%",
        // border: "2px solid yellow",
      }}
    >
      <defs>
        <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="10%"
            style={{ stopColor: "rgb(255,255,0)", stopOpacity: 0.9 }}
          ></stop>
          <stop
            offset="99%"
            style={{ stopColor: "rgb(0, 255, 0)", stopOpacity: 0.1 }}
          ></stop>
        </linearGradient>
        <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="25%"
            style={{ stopColor: "rgb(0, 255, 200)", stopOpacity: 0.1 }}
          ></stop>
          <stop
            offset="99%"
            style={{ stopColor: "rgb(200, 255, 0)", stopOpacity: 0.2 }}
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
        transform={`matrix(1,0,0,1,${width - 50},0)`}
      >
        {/*////////////////////////////////// 
    //// GROUP CIRCLE N°7 + PLANETS /////
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
          {/* PLANET BLUE */}
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="50"
            fill="#1290ff"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 0.5,
              transformOrigin: "0px 0px",
            }}
            // data-svg-origin="-670 0"
            transform={`matrix(1, 0, 0, 1, ${-width + width / 3.5} , -25)`}
          ></circle>

          {/* CIRCLE N°7 */}
          <circle
            className="c1_line c1_line4"
            cx="0"
            cy="50"
            r="550"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad1)"
            opacity="0.925397"
          ></circle>

          {/* C7 - SATELLITE VUE */}
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
          {/* C7 - SATELLITE CSS */}
          <g
            className="m1Orb orb4"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
            }}
            data-svg-origin="15 10.5"
            transform="matrix(1.5,0,0,1.5,-41.48717,584.57561)"
          >
            <circle cx="15" cy="10.5" r="20" fill="#006bca"></circle>
            <path fill="#fff" opacity="0.75" d={CSS_PATH}></path>
          </g>
        </g>

        {/*////////////////////////////////// 
        //// GROUP CIRCLE N°6 + PLANETS /////
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
          {/* PLANET SALMON */}
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
              stroke="#983334"
              opacity="0.75"
            ></circle>
            <circle
              className="m1OrbBlank"
              cx="0"
              cy="50"
              r="20"
              fill="#983334"
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

          {/* CIRCLE N°6 */}
          <circle
            className="c1_line c1_line3"
            cx="0"
            cy="50"
            r="450"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad1)"
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
          // data-svg-origin="16.3858642578125 74.372314453125"
          // transform="matrix(1,0,0,1,47.2456,-9.3122)"
        >
          {/* PLANET VIOLET */}
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="15"
            fill="#653997"
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

          {/* CIRCLE N°5 */}
          <circle
            className="c1_line c1_line2"
            cx="0"
            cy="50"
            r="360"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad1)"
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
          // data-svg-origin="-0.904937744140625 65.42562866210938"
          // transform="matrix(1,0,0,1,35.4342,-13.9683)"
        >
          {/* CIRCLE N°4 */}
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="280"
            fill="url(#grad1)"
            opacity="0.925397"
          ></circle>
          <circle
            className="c1_line c1_line1"
            cx="0"
            cy="50"
            r="279"
            fill="none"
            strokeWidth="3"
            stroke="url(#grad1)"
            opacity="0.925397"
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
            <circle cx="12.5" cy="7" r="17" fill="#653997"></circle>
            <circle
              cx="12.5"
              cy="7"
              r="20"
              fill="none"
              stroke="#653997"
            ></circle>
            <path fill="#fff" opacity="0.7" d={SVG_PATH}></path>
          </g>
        </g>

        {/*////////////////////////// 
    //// GROUP CIRCLE N°3  /////
    //////////////////////////*/}
        {/* <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            transformOrigin: "0px 0px",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
          // data-svg-origin="0 50"
          // transform="matrix(1,0,0,1,28.3473,-18.6243)"
        >
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="220"
            fill="url(#grad1)"
            // opacity="0.925397"
            opacity="0.5"
          ></circle>
        </g> */}

        {/*//////////////////////// 
    //// GROUP CIRCLE N°2 /////
    /////////////////////////*/}
        {/* <g
          className="m1_cGroup"
          style={{
            opacity: 1,
            transformOrigin: "0px 0px",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}
          // data-svg-origin="0 50"
          // transform="matrix(1,0,0,1,23.6228,-23.2804)"
        >
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="150"
            fill="url(#grad1)"
            // opacity="0.925397"
            opacity="0.5"
          ></circle>
        </g> */}

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
            fill="#88ce02"
            opacity="0.925397"
          ></circle>
        </g>
      </g>
    </svg>
  );
};

export default DiscSvg;
