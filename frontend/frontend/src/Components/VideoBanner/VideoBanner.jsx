import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function VideoBanner({ isLanding, onAnimationComplete }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      height: isLanding ? '100vh' : '120px',
      opacity: isLanding ? 1 : 0.4,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    }).then(() => {
      if (onAnimationComplete) onAnimationComplete();
    });
  }, [isLanding, controls, onAnimationComplete]);

  return (
    <motion.div
      initial={{
        height: isLanding ? '100vh' : '120px',
        opacity: isLanding ? 1 : 0.4,
      }}
      animate={controls}
      className="fixed top-0 left-0 w-full z-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
  );
}

export default VideoBanner;
