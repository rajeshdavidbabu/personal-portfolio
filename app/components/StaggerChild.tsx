import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animations are valid only inside StaggerParent and disabled on mobile devices
export const StaggerChild = ({ children, className }: StaggerChildProps) => {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    setDisableAnimations(isMobile);
  }, []);

  return (
    <div>
      {disableAnimations ? (
        <div className={className}>{children}</div>
      ) : (
        <motion.div variants={staggerChildVariants} className={className}>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default StaggerChild;
