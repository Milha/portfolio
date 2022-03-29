import HeroImage from "../components/layout/HeroImage";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Milhas Code</title>
      </Head>
      <HeroImage />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
