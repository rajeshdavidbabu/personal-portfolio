import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";

export default function Index() {
  return (
    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-between max-w-md:flex-col-reverse">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center"
      >
        <motion.h1
          variants={textVariants}
          className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
        >
          Hi there! I'm Raj.
        </motion.h1>
        <motion.p variants={textVariants} className="text-lg md:text-xl">
          I'm a software engineering leader.
          <br />
          I like to write about Typescript, React, Node.js
          <br />
          and Software Architecture.
          <br />
          <br />
          Do you like my template ?
          <br />
          Check out the codebase on{" "}
          <a
            href="https://github.com/rajeshbabu-oviva/remix-mdx-blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          .
        </motion.p>
      </motion.div>

      <motion.div
        {...imageLoadAnimationProps}
        className="relative my-0 flex items-center rounded-full border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 text-center dark:border-d-text-secondary dark:to-d-text-secondary max-w-md:mb-[2rem]"
      >
        <picture className="flex aspect-square h-full w-full items-center rounded-full bg-background dark:bg-d-background">
          <source
            srcSet="/assets/images/home-illustration.webp"
            media="(min-width: 600px)"
          />
          <img
            className="mb-[1em] w-full max-w-[550px] max-w-lg:max-w-[400px]"
            alt="Illustration of person reading a book"
            src="/assets/images/home-illustration-small.webp"
            width="550"
            height="466"
          />
        </picture>
      </motion.div>
    </div>
  );
}
