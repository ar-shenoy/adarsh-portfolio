import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Welcome = ({ onEnter }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onEnter) onEnter();
    }, 1600);
    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1}}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <div className="text-center select-none">
          <h1 className="text-5xl font-extrabold text-[#FFD700] tracking-widest">
            ▮ INITIALIZING
          </h1>
          <p className="text-sm text-white mt-2 opacity-70 font-mono tracking-wider">
            LOADING SYSTEM MODULES...
          </p>

          <div className="mt-6 h-2 w-48 bg-white/20 full mx-auto overflow-hidden shadow-inner">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.6,
                ease: "backIn"
              }}
              className="h-full w-1/2 bg-yellow-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Welcome;
