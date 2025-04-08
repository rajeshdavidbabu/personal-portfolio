import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";
import SpringLoad from "~/components/SpringLoad";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function About() {
  const [isImageLoaded, setIsImageLoaded] = useState(false || isMobile);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    const imgSrc = "https://res.cloudinary.com/dtshavwni/image/upload/v1744122411/about_page_illustration_qoj30z.png";

    img.src = imgSrc;

    setImgSrc(imgSrc);
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  return (
    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-between max-w-md:flex-col-reverse">
      <StaggerParent className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center">
        <h1 className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl">
          About me.
        </h1>
        
        <StaggerChild>
          <p className="text-lg md:text-xl">
            I am a software engineer based out of Berlin(Germany).
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
          I am passionate about building scalable and performant web and AI applications.
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
          I am currently working as the Head of Engineering at <a href="https://www.traide.ai/" target="_blank" rel="noopener noreferrer">Traide</a>.
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
            You can reach me on <a href="mailto:rajeshdavid.b@gmail.com" target="_blank" rel="noopener noreferrer">my email</a>.
          </p>
        </StaggerChild>
      </StaggerParent>

      <div className="relative my-0 flex h-[300px] w-[300px] items-center rounded-full border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 text-center dark:border-d-text-secondary dark:to-d-text-secondary lg:h-[550px] lg:w-[550px] max-w-md:mb-[2rem]">
        <picture className="flex aspect-square h-full w-full items-center rounded-full bg-background dark:bg-d-background ">
          {isImageLoaded ? (
            <SpringLoad>
              <img
                className="mb-[1em] w-full"
                alt="Illustration of person reading a book"
                src={imgSrc}
              />
            </SpringLoad>
          ) : (
            <></>
          )}
        </picture>
      </div>
    </div>
  );
}
