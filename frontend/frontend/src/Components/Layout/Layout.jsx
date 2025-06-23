import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';

function Layout() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <Navbar />

      {/* Conditional Rendering: Either App Content or Fullscreen Chat */}
      {!showChat && <Outlet />}

      {showChat && (
        <div className="fixed inset-0 z-40 w-full h-screen bg-white border-t-4 border-[#6E1313]">
          {/* Close Button */}
          <button
            onClick={() => setShowChat(false)}
            className="fixed bottom-6 right-6 z-50 bg-[#F4B3B3] text-[#440000] font-bold py-4 px-6 text-xl rounded-full shadow-xl hover:bg-[#f7c7c7] transition-all"
          >
            ×
          </button>

          {/* Fullscreen Chat iframe */}
          <iframe
            src="http://52.23.233.174:5000/ChatBot"
            title="Ask Sanskriti"
            className="w-full h-full border-none"
          />
        </div>
      )}

      {/* Always Visible Toggle Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#F4B3B3] text-[#440000] font-extrabold text-xl py-4 px-6 rounded-full shadow-2xl hover:bg-[#f7c7c7] transition-all"
        >
          Ask Abdul 💬
        </button>
      )}
    </>
  );
}

export default Layout;
