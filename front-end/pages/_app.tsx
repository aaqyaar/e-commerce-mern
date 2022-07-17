import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { store, persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="E-commerce" />
        <meta name="keywords" content="e-commerce somali" />
        <meta name="keywords" content="web app e-commerce" />
        <title>E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

export default MyApp;
