import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
    },
  },
};

// Children needs to have stagger variants and disabled on mobile devices
export const StaggerParent = ({ children, className }: StaggerParentProps) => {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    setDisableAnimations(isMobile);
  }, []);

  return (
    <div>
      {disableAnimations ? (
        <div className={className}>{children}</div>
      ) : (
        <motion.div
          variants={staggerParentVariants}
          initial="hidden"
          animate="visible"
          className={className}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default StaggerParent;
