import { forwardRef, PropsWithChildren, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { Container } from "./BackgroundStyled";

// const Background = forwardRef<HTMLDivElement, Props>((props, ref) => {
//   const {
//     backgroundColor,
//     backgroundTextColor,
//     backgroundWord,
//     backgroundImg,
//     timelinePages,
//   } = useContext(TransitionContext);
//   const { pathname, asPath } = useRouter();
//   const isAboutPage = pathname === "/about";
//   // const letterRefs = useRef<HTMLDivElement[]>([]);
//   const [isAnimDone, setIsAnimDone] = useState(true);

//   const WordComponent = ({ word }: { word: string }) => {
//     return (
//       <Span>
//         {word.split("").map((char, i) => (
//           <div key={i + 1} className={"letter"}>
//             {char}
//           </div>
//         ))}
//       </Span>
//     );
//   };

//   // if (letterRefs.current.length !== 0) {
//   // const targets = gsap.utils.toArray(letterRefs.current);
//   // const animText = (target) =>
//   //   gsap.fromTo(
//   //     target,
//   //     {
//   //       yPercent: -100,
//   //     },
//   //     { yPercent: 0, duration: 0.3, stagger: 0.1, delay: 0.15 }
//   //   );

//   // useIsoMorphicLayoutEffect(() => {
//   //   if (letterRefs.current.length !== 0) {
//   //     const targets = gsap.utils.toArray(letterRefs?.current);
//   //     animText(targets);

//   //       timelinePages.add(
//   //         // gsap.to(letterRefs.current, {
//   //         //   x: -1000,
//   //         //   autoAlpha: 0,
//   //         //   duration: 1,
//   //         //   onStart: () => setIsAnimDone(false),
//   //         //   onComplete: () => setIsAnimDone(true),
//   //         // }),
//   //         // 0
//   //         animText(targets).reverse()
//   //       );
//   //   }
//   // }, [backgroundWord, pathname, asPath]);

//   return (
//     <Container
//       ref={ref}
//       backgroundColor={backgroundColor}
//       backgroundWord={backgroundWord}
//       // backgroundTextColor={backgroundTextColor}
//       // backgroundImg={backgroundImg}
//     >
//       {props.children}
//       {/* <HomeAnimation></HomeAnimation> */}
//       {/* {backgroundImg ? (
//         <ImgContainer>
//           <Image
//             src={backgroundImg}
//             layout="fixed"
//             style={{ borderRadius: "50%" }}
//             priority={false}
//             loading="lazy"
//           />
//         </ImgContainer>
//       ) : ( */}
//       <WordContainer>
//         <WordComponent word={backgroundWord} />
//       </WordContainer>
//       {/* )} */}
//     </Container>
//   );
// });

interface Props extends PropsWithChildren {
  // word: string;
  // color: string;
}

const Background = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children } = props;

  return (
    <Container ref={ref}>
      {children}
      {/* <WordContainer backgroundTextColor={color}>
        <WordComponent word={word}></WordComponent>
      </WordContainer> */}
    </Container>
  );
});

Background.displayName = "Background";
export default Background;
