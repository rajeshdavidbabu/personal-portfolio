import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export interface StaggerParentProps {
  children: React.ReactNode;
  className?: string;
}

export const staggerParentVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
};

export const StaggerParent = ({ children, className }: StaggerParentProps) => {
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerParentVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerParent;
