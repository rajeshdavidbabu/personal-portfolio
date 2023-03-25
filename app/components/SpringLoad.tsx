import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

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

// Disabled on mobile devices
export const SpringLoad = ({ children, className }: SpringLoadProps) => {
  const [disableAnimations, setDisableAnimations] = useState(true);

  useEffect(() => {
    setDisableAnimations(isMobile);
  }, []);

  return (
    <div>
      {disableAnimations ? (
        <div className={className}>{children}</div>
      ) : (
        <motion.div {...springLoadProps} className={className}>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SpringLoad;
