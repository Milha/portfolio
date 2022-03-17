import Head from "next/head";
import classes from "../styles/Home.module.css";

import SmallCard from "../components/cards/SmallCard";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Milhas portfolio</title>
        <meta name="description" content="Portfolio of my work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Milhas Code</h1>
      <SmallCard />
      <SmallCard />
    </div>
  );
}
