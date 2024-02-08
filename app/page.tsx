import React from "react";
import Navbar from "./components/Navbar";
import { client } from "./lib/sanity";
import { SimpleBlogCard } from "./lib/interface";
async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);
  return data;
}

async function Home() {
  const data: SimpleBlogCard[] = await getData();
  console.log(data);
  return <div></div>;
}

export default Home;
