import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import StyleProvider from "../styles/StyleProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default MyApp;
