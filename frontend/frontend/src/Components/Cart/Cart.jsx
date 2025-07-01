import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/cart/${user.id}`)
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => {
        console.error('Cart fetch error:', err);
        setError('Failed to load cart');
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleRemove = async (cartId) => {
    const res = await fetch(`http://localhost:5000/cart/remove/${cartId}`, {
      method: 'DELETE',
    });

    const result = await res.json();
    alert(result.message || result.error);

    if (res.ok) {
      setCartItems(prev => prev.filter(item => item.id !== cartId));
    }
  };

  if (!user) return <p>Please login to view your cart.</p>;

  return (
    <div className="p-6 min-h-screen bg-[#FAF4EF]">
      <h2 className="text-3xl font-semibold text-center mb-6 text-[#6E1313]">🛒 Your Cart</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <img
                src={item.art?.image_url}
                alt={item.art?.title}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-xl">{item.art?.title}</h3>
              <p className="text-green-700 font-bold text-lg">₹{item.art?.price}</p>
              <button
                className="mt-3 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => handleRemove(item.id)}
              >
                ❌ Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
