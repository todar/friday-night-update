/**
 * This is a custom app replacing the default one from Next.
 * Using this to persit layout and state throughout the app.
 */
import React from "react";
// import "../styles.css";
import Layout from "../components/layout";
import Head from "next/head";
import SEO from "../components/SEO";

import { SearchProvider } from "../context/searchContext";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <SEO />
      </Head>
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </React.Fragment>
  );
};

export default App;