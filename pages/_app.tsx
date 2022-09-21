import AppHead from "../components/AppHead";
import Layout from "../components/layout/layout";
import { TransitionProvider } from "../context/TransitionContext";
import TransitionLayout from "../context/TransitionLayout";
import "../styles/_globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <AppHead />
      <TransitionProvider>
        <TransitionLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TransitionLayout>
      </TransitionProvider>
    </>
  );
};

export default MyApp;
