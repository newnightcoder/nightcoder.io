import { useRef } from "react";
import { useIsoMorphicLayoutEffect, useTransitionBackground } from "../hooks";
import { PageContainer } from "../styles/_globals";

const Contact = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground(pageRef?.current?.id);

  useIsoMorphicLayoutEffect(() => {
    if (pageRef.current) return handleBackground(pageRef.current.id);
  }, []);

  return (
    <PageContainer ref={pageRef} id="contact">
      {/* <HomeAnimation>
        <h1>CONTACT</h1>
      </HomeAnimation> */}
    </PageContainer>
  );
};
export default Contact;
