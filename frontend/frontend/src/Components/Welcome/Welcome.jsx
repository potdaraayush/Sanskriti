import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const animateThenNavigate = (path) => {
    document.body.dispatchEvent(new Event('exitLanding'));
    setTimeout(() => navigate(path), 100); // Enough to trigger animation before DOM updates
  };

  return (
    <div className="text-center px-4 max-w-xl w-full">
      <h1 className="text-4xl font-bold mb-6 text-[#F4B3B3] font-serif">Welcome to Sanskriti</h1>

      <p className="mb-10 text-lg text-gray-200">
        Explore traditional art. Support local artists. Create or collect unique pieces of culture.
      </p>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => animateThenNavigate('/login')}
          className="bg-[#6E1313] hover:bg-[#440000] transition text-white py-2 px-4 rounded-lg font-bold"
        >
          Login
        </button>

        <button
          onClick={() => animateThenNavigate('/register')}
          className="bg-[#F4B3B3] hover:bg-[#f7c7c7] text-[#440000] transition py-2 px-4 rounded-lg font-bold"
        >
          Register
        </button>

        <button
          onClick={() => {
            localStorage.setItem('user', JSON.stringify({ role: 'guest' }));
            animateThenNavigate('/app/home');
          }}
          className="bg-transparent border border-white hover:bg-white hover:text-black transition py-2 px-4 rounded-lg font-semibold"
        >
          Browse as Guest
        </button>
      </div>
    </div>
  );
}

export default Welcome;
