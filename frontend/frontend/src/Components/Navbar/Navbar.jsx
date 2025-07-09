import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="relative z-50 w-full h-[120px] overflow-hidden">
      {/* 🎥 Hardcoded Video Background for Navbar */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Navbar content */}
      <div className="relative z-10 w-full px-8 py-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/app/home">
            <span
              style={{
                fontFamily: 'Philosopher',
                fontSize: '60px',
                color: '#F4B3B3',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
              }}
            >
              Sanskriti
            </span>
          </Link>

          <ul className="flex space-x-6 text-white font-semibold drop-shadow-md">
            <li><Link to="/app/home">Home</Link></li>
            <li><Link to="/app/shop">Shop</Link></li>
            <li><Link to="/app/about">About</Link></li>
            <li><Link to="/app/contact">Contact</Link></li>
            {user ? (
              <>
                {user.role === 'buyer' && (
                  <li><Link to="/app/cart">Cart</Link></li>
                )}
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
