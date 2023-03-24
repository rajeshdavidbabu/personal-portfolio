import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig";

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Blog() {
  const posts = useLoaderData<BlogList[]>();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full max-w-[42em]"
    >
      <h1 className="mb-20 text-2xl font-bold leading-[1.3] md:text-4xl">
        Blog Posts
      </h1>

      {posts.map((post, index) => {
        return (
          <motion.div
            variants={textVariants}
            key={index}
            className="my-8 flex content-start items-center rounded-xl border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 dark:border-d-text-secondary dark:to-d-text-secondary"
          >
            <div className="h-full w-full rounded-lg bg-background py-4 px-8 dark:bg-d-background">
              <h2 className=" mb-4 mt-6 font-sans text-xl font-bold leading-[1.3] md:text-3xl">
                <Link prefetch="intent" to={post.slug}>
                  {post.title}
                </Link>
              </h2>
              <p className="my-6 md:text-lg">{post.description}</p>
              <div className="font-sans font-bold">
                <span className="mr-4 text-left uppercase text-text-secondary dark:text-d-text-secondary">
                  — {post.publishDate}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
