import { useContext, useRef } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import styles from "../styles/about.module.css";

const About = () => {
  const { timeline, backgroundColor, setBackgroundColor } =
    useContext(TransitionContext);
  const ref = useRef(null);

  useIsoMorphicLayoutEffect(() => {
    setBackgroundColor("#4ade80");
  }, []);

  return (
    <div ref={ref} id="about" className={`${styles.about} `}>
      ABOUT
    </div>
  );
};

export default About;
