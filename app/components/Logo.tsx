import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { logoLoadProps } from "~/data/animationConfig";

export const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <motion.div
        className="my-0 flex aspect-square h-10 w-10 content-center items-center rounded-full border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 text-center dark:border-d-text-secondary dark:to-d-text-secondary md:h-16 md:w-16"
        {...logoLoadProps}
      >
        <div className="flex h-full w-full content-center items-center rounded-full bg-background dark:bg-d-background"></div>
      </motion.div>
    </NavLink>
  );
};

export default Logo;
