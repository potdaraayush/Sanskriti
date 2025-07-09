import React from 'react';
import { Outlet } from 'react-router-dom';

function LandingLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Outlet />
    </div>
  );
}

export default LandingLayout;
