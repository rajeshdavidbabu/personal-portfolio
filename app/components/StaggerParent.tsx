import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile as isMobileCheck } from "react-device-detect";

export interface StaggerParentProps {
  children: React.ReactNode;
  className?: string;
  disableOnMobile?: boolean;
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

// Framer stagger animations are used in combinations with stagger parent and children.
export const StaggerParent = ({
  children,
  className,
  disableOnMobile = false,
}: StaggerParentProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // This needs to run on the client-side
  useEffect(() => {
    setIsMobile(isMobileCheck);
  }, []);

  return (
    <div>
      {isMobile && disableOnMobile ? (
        <div className={className}>{children}</div>
      ) : (
        <motion.div
          variants={staggerParentVariants}
          initial="hidden"
          animate="visible"
          className={className}
        >
          {isMobile}
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default StaggerParent;
