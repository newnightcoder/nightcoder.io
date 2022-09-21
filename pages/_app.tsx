import AppHead from "../components/AppHead";
import { TransitionProvider } from "../context/TransitionContext";
import TransitionLayout from "../context/TransitionLayout";
// import "../styles/_globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <AppHead />
      <TransitionProvider>
        <TransitionLayout>
          <Component {...pageProps} />
        </TransitionLayout>
      </TransitionProvider>
    </>
  );
};

export default MyApp;
