import gsap from "gsap";
import { useContext, useRef } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import styles from "../styles/homepage.module.css";

const HomePage = () => {
  const aref = useRef<HTMLDivElement | null>(null);
  const spanref = useRef<HTMLSpanElement | null>(null);
  const { timeline, setBackgroundColor } = useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    setBackgroundColor("#000");
  }, []);

  useIsoMorphicLayoutEffect(() => {
    if (spanref.current) {
      gsap.to(spanref.current, {
        autoAlpha: 1,
        duration: 1,
        delay: 2,
      });

      // out animation
      timeline.add(
        gsap.to(spanref.current, {
          x: -1000,
          autoAlpha: 0,
          duration: 1,
        }),
        0
      );
    }
  }, []);

  return (
    <div id="home" ref={aref} className={`${styles.main} `}>
      <span ref={spanref} className={styles.span}>
        HOME
      </span>
    </div>
  );
};

export default HomePage;
