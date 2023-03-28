import { motion } from "framer-motion";

export interface SpringLoadProps {
  children: React.ReactNode;
  className?: string;
}

const springLoadProps = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: "spring",
    },
  },
};

export const SpringLoad = ({ children, className }: SpringLoadProps) => {
  return (
    <motion.div {...springLoadProps} className={className}>
      {children}
    </motion.div>
  );
};

export default SpringLoad;
