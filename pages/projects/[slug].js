import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";

import classes from "./Project.module.css";

function projects({
  frontmatter: {
    title,
    date,
    project_image,
    alt,
    httpaddress,
    numOfWords,
    excerpt,
  },
  slug,
  content,
  frontmatter,
}) {
  return (
    <div className="bg-red mx-6 lg:mx-[20%] 2xl:mx-96">
      <div className="opacity-0 mb-20">'</div>
      <h2 className="my-10 text-center">{title}</h2>
      <div className="flex flex-col items-center justify-center relative z-10 text-yellow-200 w-full h-[15rem] sm:h-[25rem] md:h-[30rem] lg:h-[25rem] xl:h-[35rem]">
        <Image
          src={project_image}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="-z-10 relative"
        />
      </div>

      <div className="mt-8">
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data/projects"));

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const metaMarkdownSlug = fs.readFileSync(
    path.join("data/projects", slug + ".md")
  );

  const { data: frontmatter, content } = matter(metaMarkdownSlug);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

// export async function getStaticProps(context) {
//   // pageItems LOGIC
//   const data = projectData;
//   const paramsSlug = context.params.slug;
//   const pageSlug = data.find((el) => el.projectLink == paramsSlug);

//   // miniData LOGIC
//   // const arrayTest = pageSlug.test;
//   // const newMiniData = arrayTest.map((el) => venciItemData[el]);

//   return {
//     props: { pageItems: pageSlug },
//   };
// }

// export async function getStaticPaths() {
//   const data = projectData;

//   const paths = data.map((way) => ({
//     params: { slug: way.projectLink },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default projects;
