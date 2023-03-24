import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
  tag?: string;
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const StaggerChild = ({
  children,
  className,
  tag,
}: StaggerChildProps) => {
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  if (tag === "h1") {
    return (
      <motion.h1 variants={staggerChildVariants} className={className}>
        {children}
      </motion.h1>
    );
  }

  if (tag === "p") {
    return (
      <motion.p variants={staggerChildVariants} className={className}>
        {children}
      </motion.p>
    );
  }

  return (
    <motion.div variants={staggerChildVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerChild;
