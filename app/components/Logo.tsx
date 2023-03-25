import { NavLink } from "@remix-run/react";
import SpringLoad from "./SpringLoad";

export const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <SpringLoad
        bounce={true}
        className="my-0 flex aspect-square h-10 w-10 content-center items-center rounded-full border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 text-center dark:border-d-text-secondary dark:to-d-text-secondary md:h-16 md:w-16"
      >
        <div className="flex h-full w-full content-center items-center rounded-full bg-background dark:bg-d-background"></div>
      </SpringLoad>
    </NavLink>
  );
};

export default Logo;
