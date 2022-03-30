import Image from "next/image";
import classes from "./SmallCard.module.css";

export default function smallCard({ data }) {
  // const inject = data;
  // console.log(inject.title);

  return (
    <div className={classes.cont}>
      <div className={classes.imageCont}>
        <Image
          className={classes.image}
          src={data.image}
          alt={data.alt}
          width={400}
          height={300}
        />
      </div>

      <div className={classes.textItems}>
        <h2>{data.title}</h2>
        <div className={classes.iconsCont}>
        {data.icons.map((icon, i) => (
            <span className={classes.toolSpan} key={i}>
              <span>{icon}</span>
            </span>
          ))}
        </div>

        {/* <div className={classes.tools}>
          {data.icons.map((icon, i) => (
            <span className={classes.toolSpan} key={i}>
              <span>{icon}</span>
            </span>
          ))}
        </div> */}

        <div className={classes.tools}>
          {data.tools.map((tool, i) => (
            <span className={classes.toolSpan} key={i}>
              <span>{tool}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
