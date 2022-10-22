import { useRef } from "react";
import HomeAnimation from "../animations/HomeAnimation";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { PageContainer } from "../styles/contact";

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="contact">
      <HomeAnimation>
        <h1>CONTACT</h1>
      </HomeAnimation>
    </PageContainer>
  );
};
export default Contact;
