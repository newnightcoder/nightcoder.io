import { forwardRef, PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";
import { LayoutContainer, Main } from "./LayoutStyled";

interface Props extends PropsWithChildren {}

const Layout = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <LayoutContainer ref={ref}>
      <Navbar />
      <Main>{children}</Main>
    </LayoutContainer>
  );
});

export default Layout;
