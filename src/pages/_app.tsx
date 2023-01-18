import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import theme from "../styles/theme";

import { Provider } from "react-redux";
import { store } from "../store";

import { SessionProvider } from "next-auth/react";

import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Header />
          <ToastContainer theme="dark" />
          <Component {...pageProps} />
          <GlobalStyle />
          <Footer />
        </SessionProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
