import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CategoryCard({ title, imageUrl, description, path }) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(path)}
      className="min-w-[280px] max-w-[300px] rounded-2xl cursor-pointer relative group transition-all duration-300"
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Subtle Glow on Hover */}
      <div className="absolute -inset-1 bg-[#F4B3B355] opacity-0 group-hover:opacity-40 blur-lg rounded-2xl z-0 transition-all duration-500 pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10 backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10 shadow-md hover:shadow-[#F4B3B3]/40 rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-philosopher text-[#F4B3B3] group-hover:text-[#ffd0d0] mb-1 transition">
            {title}
          </h3>
          <p className="text-sm text-gray-300 group-hover:text-gray-200 transition font-light">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
