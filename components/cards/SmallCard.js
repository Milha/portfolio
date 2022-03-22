import Image from "next/image";
import classes from "./SmallCard.module.css";

export default function smallCard({ data }) {
  // const inject = data;
  // console.log(inject.title);

  return (
    <div className={classes.cont}>
      <div className={classes.imageCont}></div>
      <Image src={data.image} alt={data.alt} width={400} height={300} />
      <div className={classes.textItems}>
        <h2>{data.title}</h2>
        <p>{}</p>
      </div>
    </div>
  );
}
