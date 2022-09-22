import AppHead from "../components/AppHead";
import { TransitionProvider } from "../context/TransitionContext";
import TransitionLayout from "../context/TransitionLayout";

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
