import { projectList } from "~/data/projectsMetaData";

import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";

export default function Projects() {
  // For now, we're just going to use the blogList data without loader.
  // In the future, we'll use a loader to fetch the data from a CMS.
  const posts = projectList;

  return (
    <StaggerParent className="mx-auto my-0 w-full max-w-[42em]">
      <h1 className="mb-20 text-2xl font-bold leading-[1.3] md:text-4xl">
        Projects
      </h1>

      {posts.map((post, index) => {
        return (
          <StaggerChild
            key={index}
            className="my-8 flex content-start items-center rounded-xl border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 dark:border-d-text-secondary dark:to-d-text-secondary"
          >
            <div className="h-full w-full rounded-lg bg-background py-4 px-8 dark:bg-d-background">
              <h2 className=" mb-4 mt-6 font-sans text-xl font-bold leading-[1.3] md:text-3xl">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h2>
              <p className="my-6 md:text-lg">{post.description}</p>
            </div>
          </StaggerChild>
        );
      })}
    </StaggerParent>
  );
}
