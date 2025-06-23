import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import art1 from '../../assets/Images/Products/test/art1.png';
import art2 from '../../assets/Images/Products/test/art2.png';
import art3 from '../../assets/Images/Products/test/art3.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-white font-body">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#0F0000]">
        <h1 className="text-5xl font-heading mb-4 text-[#F4B3B3]">Welcome to Sanskriti</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Discover, buy, and support traditional Indian art and artisans. Celebrate culture with every piece you own.
        </p>
        <button
          onClick={() => navigate('/app/shop')} // ✅ relative path
          className="mt-6 bg-[#F4B3B3] text-[#440000] font-semibold py-2 px-6 rounded-full hover:bg-[#f7c7c7] transition"
        >
          Explore the Shop
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-10 px-6 bg-[#1A0000]">
        <h2 className="text-3xl font-heading mb-6 text-center text-[#F4B3B3]">Featured Artworks</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card imageUrl={art1} title="Madhubani Magic" description="Hand-painted piece from Bihar" />
          <Card imageUrl={art2} title="Blue Pottery" description="Traditional Jaipur ceramic work" />
          <Card imageUrl={art3} title="Pattachitra Scroll" description="Mythological scenes from Odisha" />
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-10 px-6 bg-[#0F0000] text-center">
        <h2 className="text-3xl font-heading text-[#F4B3B3] mb-4">Artist of the Week</h2>
        <p className="text-lg text-gray-300 mb-2">
          Meet Kavita Sharma, a third-generation Kalamkari artist from Andhra Pradesh.
        </p>
        <button
          onClick={() => navigate('shop')} // ✅ relative path
          className="mt-4 bg-[#F4B3B3] text-[#440000] font-semibold py-2 px-6 rounded-full hover:bg-[#f7c7c7] transition"
        >
          See Her Work
        </button>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-[#0F0000] text-center">
        <h2 className="text-3xl font-heading text-[#F4B3B3] mb-4">Are You an Artist?</h2>
        <p className="text-lg text-gray-300">Join over 200 artists showcasing their heritage on Sanskriti.</p>
        <button
          onClick={() => navigate('/register')} // still absolute, since it's not under /app
          className="mt-4 bg-[#F4B3B3] text-[#440000] font-semibold py-2 px-6 rounded-full hover:bg-[#f7c7c7] transition"
        >
          Register as Seller
        </button>
      </section>
    </div>
  );
}

export default Home;
