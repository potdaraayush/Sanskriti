// src/components/Card/ProductCard.jsx
import React from 'react';

function ProductCard({ title, imageUrl, description, price }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform hover:shadow-lg hover:ring-2 hover:ring-[#F4B3B3]">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-[#F4B3B3] font-semibold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm mb-2">{description}</p>
        <p className="text-lg text-green-300 font-semibold">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
