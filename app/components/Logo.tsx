import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";

const bounceLoadProps = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};

export const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <motion.div
        {...bounceLoadProps}
        className="my-0 flex aspect-square h-10 w-10 content-center items-center rounded-full border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 text-center dark:border-d-text-secondary dark:to-d-text-secondary md:h-16 md:w-16"
      >
        <div className="flex h-full w-full content-center items-center rounded-full bg-background dark:bg-d-background"></div>
      </motion.div>
    </NavLink>
  );
};

export default Logo;
