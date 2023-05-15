import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import * as gtag from "../utils/gtag"; // Import the gtag utility
import Script from "next/script";
import { styled } from '@mui/system';


const MainContentContainer = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(7), // Adjust according to the height of your BottomNavigation bar
}));

const theme = createTheme();

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
  
    router.events.on("routeChangeComplete", handleRouteChange);
  
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tolerancestackupcalculator.com/" />
  <meta property="og:title" content="Tolerance Stack Up Calculator" />
  <meta
    property="og:description"
    content="Easily calculate the worst-case tolerance stack up for shafts and holes using our Tolerance Stack Up Calculator."
  />
  <meta property="og:image" content="https://tolerancestackupcalculator.com/og-image.jpg" />

  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://tolerancestackupcalculator.com/" />
  <meta property="twitter:title" content="Tolerance Stack Up Calculator" />
  <meta
    property="twitter:description"
    content="Easily calculate the worst-case tolerance stack up for shafts and holes using our Tolerance Stack Up Calculator."
  />
  <meta property="twitter:image" content="https://tolerancestackupcalculator.com/twitter-image.jpg" />

  {/* Google / Search Engine */}
  <meta itemProp="name" content="Tolerance Stack Up Calculator" />
  <meta
    itemProp="description"
    content="Easily calculate the worst-case tolerance stack up for shafts and holes using our Tolerance Stack Up Calculator."
  />
  <meta itemProp="image" content="https://tolerancestackupcalculator.com/google-image.jpg" />
</Head>

<ThemeProvider theme={theme}>
        <Navbar />
        <CssBaseline />
        <MainContentContainer>
          <Component {...pageProps} />
        </MainContentContainer>
      </ThemeProvider>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default App;
