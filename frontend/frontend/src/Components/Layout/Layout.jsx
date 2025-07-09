import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import mandalaBg from '../../assets/backgrounds/mandala.jpg';

function Layout() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0F0000] text-white font-sans overflow-x-hidden">
      {/* Mandala texture below Navbar */}
      <div
        className="absolute top-[120px] left-0 w-full h-full z-0 pointer-events-none bg-repeat opacity-10"
        style={{
          backgroundImage: `url(${mandalaBg})`,
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
        }}
      />

      <div className="relative z-10">
        <Navbar />

        {!showChat && <Outlet />}

        {showChat && (
          <div className="fixed inset-0 z-40 w-full h-screen bg-white border-t-4 border-[#6E1313]">
            <button
              onClick={() => setShowChat(false)}
              className="fixed bottom-6 right-6 z-50 bg-[#F4B3B3] text-[#440000] font-bold py-4 px-6 text-xl rounded-full shadow-xl hover:bg-[#f7c7c7] transition-all"
            >
              ×
            </button>
            <iframe
              src="http://52.23.233.174:5000/ChatBot"
              title="Ask Sanskriti"
              className="w-full h-full border-none"
            />
          </div>
        )}

        {!showChat && (
          <button
            onClick={() => setShowChat(true)}
            className="fixed bottom-6 right-6 z-50 bg-[#F4B3B3] text-[#440000] font-extrabold text-xl py-4 px-6 rounded-full shadow-2xl hover:bg-[#f7c7c7] transition-all"
          >
            Ask Abdul 💬
          </button>
        )}
      </div>
    </div>
  );
}

export default Layout;
