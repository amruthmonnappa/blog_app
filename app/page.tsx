import React from "react";
import Navbar from "./components/Navbar";
import { client, urlFor } from "./lib/sanity";
import { SimpleBlogCard } from "./lib/interface";
import { Card , CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const revalidate = 30;
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

  return (
    <div className=" mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            width={500}
            height={500}
            src={urlFor(post.titleImage).url()}
            alt="image"
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-400">{post.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;
