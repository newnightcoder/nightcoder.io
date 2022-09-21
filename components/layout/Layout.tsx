import { forwardRef, PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";
import { LayoutContainer, PageContainer } from "./LayoutStyled";

interface Props extends PropsWithChildren {}

const Layout = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <LayoutContainer ref={ref}>
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </LayoutContainer>
  );
});

export default Layout;
