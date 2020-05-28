import React from "react";
import NextHead from "next/head";

interface HeadProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = (props: HeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
  </NextHead>
);

export default Head;
