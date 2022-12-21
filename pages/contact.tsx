import { useRef } from "react";
import { useIsoMorphicLayoutEffect, useTransitionBackground } from "../hooks";
import { PageContainer } from "../styles/_globals";

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="contact">
      {/* <HomeAnimation>
        <h1>CONTACT</h1>
      </HomeAnimation> */}
    </PageContainer>
  );
};
export default Contact;
