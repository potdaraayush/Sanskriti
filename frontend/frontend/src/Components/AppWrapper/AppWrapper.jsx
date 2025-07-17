import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

function AppWrapper() {
  const location = useLocation();
  const [isLanding, setIsLanding] = useState(true);
  const controls = useAnimation();
  const videoRef = useRef(null);
  const prevLanding = useRef(true);
  const hasMounted = useRef(false);

  useEffect(() => {
    const landingPaths = ['/', '/login', '/register', '/otp'];
    const currentlyLanding = landingPaths.includes(location.pathname);
    setIsLanding(currentlyLanding);

    if (prevLanding.current !== currentlyLanding || !hasMounted.current) {
      controls.start({
        height: currentlyLanding ? '100vh' : '120px',
        transition: { duration: 1.2, ease: 'easeInOut' },
      });
      prevLanding.current = currentlyLanding;
    }

    hasMounted.current = true;
  }, [location.pathname, controls]);

  // 🔄 Respond to custom event when exiting landing
  useEffect(() => {
    const handleExit = () => {
      setIsLanding(false); // Triggers animation to shrink
      controls.start({
        height: '120px',
        transition: { duration: 1.2, ease: 'easeInOut' },
      });
    };

    document.body.addEventListener('exitLanding', handleExit);
    return () => document.body.removeEventListener('exitLanding', handleExit);
  }, [controls]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* 🎥 Persistent Animated Video */}
      <motion.div
        initial={{ height: '100vh' }}
        animate={controls}
        className="fixed top-0 left-0 w-full z-0 overflow-hidden"
        style={{ pointerEvents: 'none' }}
        ref={videoRef}
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

      {/* 💎 Main Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppWrapper;
