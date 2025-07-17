import React from 'react';
import { useNavigate } from 'react-router-dom';
import art1 from '../../assets/Images/Products/test/art1.png';
import art2 from '../../assets/Images/Products/test/art2.png';
import art3 from '../../assets/Images/Products/test/art3.png';
import artist from '../../assets/backgrounds/artist.jpg';
import ctaBg from '../../assets/backgrounds/ctaBg.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-white font-sans w-full">
      {/* Hero Section */}
      <section className="text-center py-28 px-6 bg-[#0F0000]/80 backdrop-blur-sm">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#F4B3B3] drop-shadow-lg tracking-wide">
          Sanskriti
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed font-light">
          Curated traditional Indian art, directly from artisans. Own a story, not just a product.
        </p>
        <button
          onClick={() => navigate('/app/shop')}
          className="mt-8 bg-[#F4B3B3] text-[#440000] font-semibold py-3 px-8 rounded-full hover:scale-105 shadow-lg transition-all duration-300 ease-in-out"
        >
          Browse the Collection
        </button>
      </section>

      {/* Featured Artworks */}
      <section className="py-24 px-6 bg-[#1A0000]/90 backdrop-blur-sm">
        <h2 className="text-4xl font-serif mb-10 text-center text-[#F4B3B3] tracking-wide">
          Featured Artworks
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[art1, art2, art3].map((img, i) => (
            <div
              key={i}
              className="w-[280px] h-[400px] bg-[#1A1A1A] rounded-xl overflow-hidden shadow-xl transition transform hover:scale-[1.02] pointer-events-none"
            >
              <img
                src={img}
                alt={`art${i + 1}`}
                className="w-full h-60 object-cover border-b border-[#F4B3B3]"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif text-[#F4B3B3] mb-2">Artwork Name</h3>
                <p className="text-sm text-gray-400 font-light">
                  A traditional cultural piece from our handpicked curation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artist of the Week */}
      <section
        className="relative py-20 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${artist})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-[#0F0000]/70 p-8 rounded-md backdrop-blur-sm">
          <h2 className="text-4xl font-serif text-[#F4B3B3] mb-4 tracking-wide">
            Artist of the Week
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            Meet <span className="font-semibold text-[#F4B3B3]">Kavita Sharma</span>, a third-generation Kalamkari artist from Andhra Pradesh.
          </p>
          <button
            onClick={() => navigate('/app/profile/kavita-sharma')}
            className="bg-[#F4B3B3] text-[#440000] font-semibold py-2 px-6 rounded-full transition-all duration-300"
          >
            View Profile
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-[#0F0000]/70 p-8 rounded-md backdrop-blur-sm">
          <h2 className="text-4xl font-serif text-[#F4B3B3] mb-4 tracking-wide">
            Are You an Artist?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            Showcase your heritage to the world. Sanskriti is home to over 200+ artists.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="bg-gradient-to-r from-[#F4B3B3] to-[#fcdede] text-[#440000] font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
          >
            Join the Platform
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
