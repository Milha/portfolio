import HeroImage from "../components/layout/HeroImage";
import "../styles/globals.css";
import Header from "../components/layout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeroImage />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
