// src/components/Card/ProductCard.jsx
import React from 'react';

function ProductCard({ id, seller_id, title, image_url, description, price }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform hover:shadow-lg hover:ring-2 hover:ring-[#F4B3B3]">
      <img
        src={image_url}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
        }}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl text-[#F4B3B3] font-semibold mb-1 truncate">{title}</h3>
        <p className="text-gray-300 text-sm mb-2 line-clamp-2">{description}</p>
        <p className="text-lg text-green-300 font-semibold">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
