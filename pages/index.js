import Head from "next/head";
import classes from "../styles/Home.module.css";

import SmallCard from "../components/cards/SmallCard";

import { pagesInfo } from "../data/pagesInfo";

export default function Home() {
  // console.log(pagesInfo);
  return (
    <div className={classes.container}>
      <Head>
        <title>Milhas portfolio</title>
        <meta name="description" content="Portfolio of my work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Milhas Code</h1>
      {pagesInfo.map((page) => (
        <section key={page.id}>
          <SmallCard data={page} />
        </section>
      ))}
      {/* <SmallCard data={pagesInfo} /> */}
      {/* <SmallCard data={pagesInfo} /> */}
    </div>
  );
}
