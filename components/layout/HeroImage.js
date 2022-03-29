import Image from "next/image";
import classes from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={classes.cont}>
      <figure>
        <picture>
          <Image
            className={classes.image}
            src="/images/back-index-html-RAW.jpg"
            alt="Next.js logo"
            width="100%"
            height="50vh"
            layout="responsive"
            objectFit="cover"
          ></Image>
        </picture>
      </figure>
    </div>
  );
}
