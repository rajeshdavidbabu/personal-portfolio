import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile as isMobileCheck } from "react-device-detect";

export interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
  disableOnMobile?: boolean;
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animations are valid only inside StaggerParent
export const StaggerChild = ({
  children,
  className,
  disableOnMobile = false,
}: StaggerChildProps) => {
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
        <motion.div variants={staggerChildVariants} className={className}>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default StaggerChild;
