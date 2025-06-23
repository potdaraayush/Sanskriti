import React from 'react';
import Card from '../Card/Card.jsx';

// Images
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

  const Categories = [
    {
      title: 'Wooden',
      imageUrl: WoodenImage,
      description: 'Explore our handcrafted wooden art pieces.',
      path: '/app/category/wooden'
    },
    {
      title: 'Sarees',
      imageUrl: SareeImage,
      description: 'Traditional Indian sarees with rich heritage.',
      path: '/app/category/sarees'
    },
    {
      title: 'Wall Decors',
      imageUrl: WallDecorImage,
      description: 'Elevate your space with our wall art.',
      path: '/app/category/wall-decors'
    },
    {
      title: 'Paintings',
      imageUrl: PaintingsImage,
      description: 'Beautiful paintings by local artisans.',
      path: '/app/category/paintings'
    },
    {
      title: 'Sculptures',
      imageUrl: SculpturesImage,
      description: 'Intricately designed sculptures for home & office.',
      path: '/app/category/sculptures'
    },
    {
      title: 'Pottery',
      imageUrl: PotteryImage,
      description: 'Elegant pottery and ceramics collections.',
      path: '/app/category/pottery'
    },
    {
      title: 'Jewelry',
      imageUrl: JewelryImage,
      description: 'Ethnic and handmade traditional jewelry.',
      path: '/app/category/jewelry'
    },
    {
      title: 'MetalWork',
      imageUrl: MetalWorkImage,
      description: 'Brass and metal crafts rooted in tradition.',
      path: '/app/category/metalwork'
    }
  ];

  return (
    <>
      <h1
        style={{
          color: '#F4B3B3',
          textAlign: 'center',
          fontSize: '30px',
          fontFamily: 'Philosopher, sans-serif'
        }}
      >
        Welcome to the Shop!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center p-4">
        {/* Seller-specific manage link */}
        {isSeller && (
          <Card
            id="manage" // dummy
            seller_id={user.id}
            title="Manage My Arts"
            imageUrl="https://cdn-icons-png.flaticon.com/512/6815/6815042.png"
            description="Edit or update the art you've uploaded"
            price=""
            link="/app/seller/edit-art"
            disableCart // ✅ disable cart for this card
          />
        )}

        {/* Render all categories */}
        {Categories.map((category, index) => (
          <Card
            key={index}
            id={`category-${index}`} // dummy id
            seller_id=""
            title={category.title}
            imageUrl={category.imageUrl}
            description={category.description}
            price=""
            link={category.path}
            disableCart // ✅ disable cart button for category cards
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
