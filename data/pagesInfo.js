import Html from "../components/icons/Html";
import Sass from "../components/icons/Sass";
import NextJS from "../components/icons/NextJS";
import Css from "../components/icons/Css";
import React from "../components/icons/React";
import JavaScript from "../components/icons/JavaScript";

const html = <Html />;
const sass = <Sass />;
const nextJS = <NextJS />;
const css = <Css />;
const react = <React />;
const javaScript = <JavaScript />;

export const pagesInfo = [
  {
    id: 0,
    title: "Vlasnik Nekretnine",
    link: "/",
    httpaddress: "",
    image: "/images/vlasnik-front.jpg",
    alt: "Front page of site Vlasnik nekretnine",
    tools: ["NextJS", "React", "HTML", "CSS", "Sass", "Schema.org"],
    icons: [nextJS, react, html, css, sass],
  },
  {
    id: 1,
    title: "Cvećara Hrizantema",
    link: "/",
    httpaddress: "",
    image: "/images/hrizantema-front.jpg",
    alt: "Front page of site cvecara Hrizantema",
    tools: ["HTML", "CSS", "JavaScript", "Schema.org"],
    icons: [html, css, javaScript],
  },
];
