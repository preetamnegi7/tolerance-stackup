import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tolerance Stack Up Calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Easily calculate the worst-case tolerance stack up for shafts and holes using our Tolerance Stack Up Calculator."
        />
        <meta
          name="keywords"
          content="tolerance stack up, calculator, shaft, hole, interference, gap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
