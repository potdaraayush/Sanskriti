import React from 'react';
import CategoryCard from '../Card/CategoryCard';

import WoodenImage from '../../assets/Images/Products/Wooden/WoodenImage.png';
import SareeImage from '../../assets/Images/Products/Sarees/SareeImage.png';
import WallDecorImage from '../../assets/Images/Products/Wall Decor/WallDecorImage.png';
import PaintingsImage from '../../assets/Images/Products/Paintings/PaintingsImage.png';
import SculpturesImage from '../../assets/Images/Products/Sculptures/SculpturesImage.png';
import PotteryImage from '../../assets/Images/Products/Pottery/PotteryImage.png';
import JewelryImage from '../../assets/Images/Products/Jewelry/JewelryImage.png';
import MetalWorkImage from '../../assets/Images/Products/MetalWork/MetalWorkImage.png';

function Shop() {
  const user = JSON.parse(localStorage.getItem('user'));
  const isSeller = user?.role === 'seller';

  const categories = [
    {
      title: 'Wooden',
      imageUrl: WoodenImage,
      description: 'Explore our handcrafted wooden art pieces.',
      path: '/app/category/wooden',
    },
    {
      title: 'Sarees',
      imageUrl: SareeImage,
      description: 'Traditional Indian sarees with rich heritage.',
      path: '/app/category/sarees',
    },
    {
      title: 'Wall Decors',
      imageUrl: WallDecorImage,
      description: 'Elevate your space with our wall art.',
      path: '/app/category/wall-decors',
    },
    {
      title: 'Paintings',
      imageUrl: PaintingsImage,
      description: 'Beautiful paintings by local artisans.',
      path: '/app/category/paintings',
    },
    {
      title: 'Sculptures',
      imageUrl: SculpturesImage,
      description: 'Intricately designed sculptures for home & office.',
      path: '/app/category/sculptures',
    },
    {
      title: 'Pottery',
      imageUrl: PotteryImage,
      description: 'Elegant pottery and ceramics collections.',
      path: '/app/category/pottery',
    },
    {
      title: 'Jewelry',
      imageUrl: JewelryImage,
      description: 'Ethnic and handmade traditional jewelry.',
      path: '/app/category/jewelry',
    },
    {
      title: 'MetalWork',
      imageUrl: MetalWorkImage,
      description: 'Brass and metal crafts rooted in tradition.',
      path: '/app/category/metalwork',
    },
  ];

  const scroll = (dir) => {
    const container = document.getElementById('category-carousel');
    container.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <div className="py-16 px-6 text-white">
      <h1 className="text-4xl text-[#F4B3B3] text-center mb-12 font-philosopher tracking-wider drop-shadow-lg">
        Explore Our Categories
      </h1>

      <div className="relative flex items-center justify-center w-full">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 z-10 text-white px-4 py-3 rounded-full shadow hover:scale-110 transition"
        >
          ◀
        </button>

        <div
          id="category-carousel"
          className="flex overflow-x-auto gap-8 px-12 py-4 scroll-smooth hide-scrollbar"
        >
          {isSeller && (
            <CategoryCard
              title="Manage My Work"
              imageUrl="https://cdn-icons-png.flaticon.com/512/6815/6815042.png"
              description="Edit or update your uploaded arts"
              path="/app/seller/edit-art"
            />
          )}
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-0 z-10 bg-[#440000] text-white px-4 py-3 rounded-full shadow hover:scale-110 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Shop;
