import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-black">
      {/* 🎥 Fullscreen video background (no animation) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* 👇 Your login/register form renders here */}
      <div className="z-10 w-full px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
