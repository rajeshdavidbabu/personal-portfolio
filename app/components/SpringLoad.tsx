import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile as isMobileCheck } from "react-device-detect";

export interface SpringLoadProps {
  children: React.ReactNode;
  className?: string;
  disableOnMobile?: boolean;
  bounce?: boolean;
}

const getSpringLoadProps = (bounce: boolean) => {
  const scale = bounce
    ? {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      }
    : { type: "spring" };

  return {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale,
    },
  };
};

export const SpringLoad = ({
  children,
  className,
  disableOnMobile = false,
  bounce = false,
}: SpringLoadProps) => {
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
        <motion.div {...getSpringLoadProps(bounce)} className={className}>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SpringLoad;
