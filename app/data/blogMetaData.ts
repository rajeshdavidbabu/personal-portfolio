// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
  pathName: string;
  readingTime: string;
}

export const blogList: Array<BlogList> = [
  {
    slug: "code-splitting-i18n",
    title: "Code Splitting i18n Locales Using Dynamic Imports",
    publishDate: "08 Jul 2022",
    description:
      "A quick article about how to leverage dynamic imports and code-split language.json files.",
    pathName: "/blog/code-splitting-i18n",
    readingTime: "5 min",
  },
  {
    slug: "modular-architecture-react-ts",
    title: "Building a Scalable and Modular React-TS Architecture",
    publishDate: "05 Mar 2022",
    description:
      "An opinionated guide to modularizing your React-TS applications.",
    pathName: "/blog/modular-architecture-react-ts",
    readingTime: "3 min",
  },
  {
    slug: "robust-frontend-techstack",
    title: "A Quick Guide On Choosing A Robust Frontend Tech Stack",
    publishDate: "13 Jan 2022",
    description:
      "A quick guide on choosing a robust frontend tech stack for your next big project.",
    pathName: "/blog/robust-frontend-techstack",
    readingTime: "5 min",
  },
  {
    slug: "how-does-graphql-work",
    title: "How does graphQL work anyway ?",
    publishDate: "15 May 2020",
    description:
      "A deep-dive into understanding how graphQL works under the hood with simple examples.",
    pathName: "/blog/how-does-graphql-work",
    readingTime: "10 min",
  },
  {
    slug: "simple-guide-es6-generators",
    title: "A Simple Guide to Understanding ES6 Generators",
    publishDate: "05 May 2018",
    description:
      "A guide to understanding the es6 generators with simple examples.",
    pathName: "/blog/simple-guide-es6-generators",
    readingTime: "9 min",
  },
  {
    slug: "js-promise-api-guide",
    title: "Javascript Promises: An In-Depth API Guide",
    publishDate: "06 Jul 2018",
    description:
      "An in-depth guide to understanding the javascript promise APIs for beginner/intermediate devs.",
    pathName: "/blog/js-promise-api-guide",
    readingTime: "6 min",
  },
  {
    slug: "webpack-react-heroku",
    title: "Deploy your Webpack apps to Heroku in 3 simple steps",
    publishDate: "28 May 2018",
    description:
      "3 simple steps to deploy your react webpack apps to heroku with a sample codebase.",
    pathName: "/blog/webpack-react-heroku",
    readingTime: "6 min",
  },
  {
    slug: "clone-aws-nodejs",
    title: "How I built a Node.js Service to Clone my AWS S3 Buckets",
    publishDate: "07 Mar 2019",
    description:
      "A simple personal project to clone Node.js S3 buckets using the AWS JS SDK.",
    pathName: "/blog/clone-aws-nodejs",
    readingTime: "8 min",
  },
  {
    slug: "array-vs-map-vs-set-vs-object",
    title: "Use cases for Array vs Set vs Map vs Object",
    publishDate: "29 Apr 2018",
    description:
      "Different data-structures and their real-time use cases in Javascript (ES6/ES7).",
    pathName: "/blog/array-vs-map-vs-set-vs-object",
    readingTime: "8 min",
  },
];

export const imgSrcs = {
  mobile:
    "https://res.cloudinary.com/dtshavwni/image/upload/v1680013098/home-illustration-small_wdsuej.webp",
  desktop:
    "https://res.cloudinary.com/dtshavwni/image/upload/v1680013101/home-illustration_vfanz6.webp",
};
