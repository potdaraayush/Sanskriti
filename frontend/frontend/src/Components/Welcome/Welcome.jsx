import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F0000] text-white px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#F4B3B3] font-serif">Welcome to Sanskriti</h1>

      <p className="mb-10 text-lg text-gray-300 text-center max-w-xl">
        Explore traditional art. Support local artists. Create or collect unique pieces of culture.
      </p>

      <div className="flex flex-col space-y-4 w-full max-w-sm">
        <button
          onClick={() => navigate('/login')}
          className="bg-[#6E1313] hover:bg-[#440000] transition text-white py-2 px-4 rounded-lg font-bold"
        >
          Login
        </button>

        <button
          onClick={() => navigate('/register')}
          className="bg-[#F4B3B3] hover:bg-[#f7c7c7] text-[#440000] transition py-2 px-4 rounded-lg font-bold"
        >
          Register
        </button>

        <button
          onClick={() => {
            localStorage.setItem('user', JSON.stringify({ role: 'guest' }));
            navigate('/app/home');
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
