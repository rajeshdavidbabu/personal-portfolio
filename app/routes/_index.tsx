import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";
import SpringLoad from "~/components/SpringLoad";
import homeImageSrc from "../../public/assets/images/home-illustration.webp";
import homeImageSmallSrc from "../../public/assets/images/home-illustration-small.webp";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return json({ homeImageSrc, homeImageSmallSrc });
};

export default function Index() {
  let { homeImageSrc, homeImageSmallSrc } = useLoaderData();

  return (
    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-between max-w-md:flex-col-reverse">
      <StaggerParent className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center">
        <h1 className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl">
          Hi there! I'm Raj.
        </h1>
        <StaggerChild>
          <p className="text-lg md:text-xl">
            I'm a software engineering leader.
            <br />
            I like to write about Typescript, React, Node.js
            <br />
            and Software Architecture.
          </p>
        </StaggerChild>
        <br />
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
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
          </p>
        </StaggerChild>
      </StaggerParent>

      <SpringLoad className="relative my-0 flex items-center rounded-full border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 text-center dark:border-d-text-secondary dark:to-d-text-secondary max-w-md:mb-[2rem]">
        <picture className="flex aspect-square h-full w-full items-center rounded-full bg-background dark:bg-d-background">
          <source srcSet={homeImageSrc} media="(min-width: 600px)" />
          <img
            className="mb-[1em] w-full max-w-[550px] max-w-lg:max-w-[400px]"
            alt="Illustration of person reading a book"
            src={homeImageSmallSrc}
            width="550"
            height="466"
          />
        </picture>
      </SpringLoad>
    </div>
  );
}
