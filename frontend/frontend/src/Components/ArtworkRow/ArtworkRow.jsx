import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArtworkRow({ title, artworks, viewAllLink }) {
  const navigate = useNavigate();

  const scroll = (id, dir) => {
    const el = document.getElementById(id);
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-2xl font-serif text-[#F4B3B3]">{title}</h2>
        <button
          onClick={() => navigate(viewAllLink)}
          className="text-sm text-[#F4B3B3] hover:underline"
        >
          View All →
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll(title, -1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#440000] text-white px-2 py-1 z-10 hover:scale-110 transition rounded-l"
        >
          ◀
        </button>

        <div
          id={title}
          className="flex overflow-x-auto gap-6 py-4 px-8 scrollbar-hide scroll-smooth"
        >
          {artworks.map((art, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-[#1A1A1A] rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-[#F4B3B3]"
            >
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#F4B3B3]">{art.title}</h3>
                <p className="text-sm text-gray-300 mt-1">₹{art.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(title, 1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#440000] text-white px-2 py-1 z-10 hover:scale-110 transition rounded-r"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default ArtworkRow;
