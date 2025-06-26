// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard.jsx';

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/category/${categoryName}`);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="px-6 py-12 min-h-screen bg-[#0F0000] text-white">
      <h2 className="text-3xl text-center mb-8 text-[#F4B3B3] font-serif capitalize tracking-wider drop-shadow-lg">
        {categoryName.replace(/-/g, ' ')} Collection
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-300 text-lg">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
