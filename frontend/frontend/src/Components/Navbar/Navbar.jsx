import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('user');
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    // Set user initially on mount
    handleStorageChange();

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Also update user on route change to catch login navigations
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="relative z-50 w-full h-[120px] overflow-hidden">
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

      <div className="absolute inset-0 bg-black/40 z-0" />

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

          <ul className="flex space-x-6 text-white font-semibold drop-shadow-md items-center">
            <li><Link to="/app/home">Home</Link></li>
            <li><Link to="/app/shop">Shop</Link></li>
            <li><Link to="/app/about">About</Link></li>
            <li><Link to="/app/contact">Contact</Link></li>

            {user ? (
              <>
                {user.role === 'buyer' && (
                  <li><Link to="/app/cart">Cart</Link></li>
                )}
                {user.role === 'seller' && (
                  <li><Link to="/app/dashboard">Dashboard</Link></li>
                )}
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-red-400 transition"
                  >
                    Logout
                  </button>
                </li>
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
