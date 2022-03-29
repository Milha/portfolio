import HeroImage from "../components/layout/HeroImage";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeroImage />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
