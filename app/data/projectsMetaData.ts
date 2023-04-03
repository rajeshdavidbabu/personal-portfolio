// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projectList: Array<Project> = [
  {
    title: "A trendy online sock-shop",
    description:
      "An online sock shop built with React, Chakra-ui, Vercel Serverless APIs and Stripe",
    link: "https://getyourfckingsocks.com",
  },
  {
    title: "Remix-MDX Blog Template",
    description:
      "Quick production ready remix-mdx blog template with dark mode and more",
    link: "https://github.com/rajeshbabu-oviva/remix-mdx-blog",
  },
  {
    title: "Code-split React i18n files",
    description: "A quick project on how to code-split react i18n files",
    link: "https://github.com/rajeshbabu-oviva/react-i18n-codesplitting-locales",
  },
  {
    title: "React-TS Boilerplate",
    description: "A quick production ready react-ts boilerplate without CRA",
    link: "https://github.com/rajeshbabu-oviva/react-ts-boilerplate",
  },
  {
    title: "React Heroku Deployment Template",
    description:
      "A quick production ready react app template with heroku deployment",
    link: "https://github.com/rajeshbabu-oviva/react-for-heroku",
  },
];
