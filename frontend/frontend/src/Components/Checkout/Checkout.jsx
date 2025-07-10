import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Basic validation
    if (
      !shippingInfo.name.trim() ||
      !shippingInfo.address.trim() ||
      !shippingInfo.city.trim() ||
      !shippingInfo.zip.trim() ||
      !shippingInfo.phone.trim()
    ) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');

    // TODO: Send order data to backend here

    alert("Checkout feature coming soon!");

    // After success, navigate to confirmation page (once created)
    // navigate('/app/order-confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl mb-4 text-center font-semibold text-[#6E1313]">Checkout</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-2 font-medium text-gray-900">Full Name</label>
      <input
        name="name"
        placeholder="Full Name"
        value={shippingInfo.name}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400"
      />

      <label className="block mb-2 font-medium text-gray-900">Address</label>
      <input
        name="address"
        placeholder="Address"
        value={shippingInfo.address}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400"
      />

      <label className="block mb-2 font-medium text-gray-900">City</label>
      <input
        name="city"
        placeholder="City"
        value={shippingInfo.city}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400"
      />

      <label className="block mb-2 font-medium text-gray-900">Zip Code</label>
      <input
        name="zip"
        placeholder="Zip Code"
        value={shippingInfo.zip}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400"
      />

      <label className="block mb-2 font-medium text-gray-900">Phone Number</label>
      <input
        name="phone"
        placeholder="Phone Number"
        value={shippingInfo.phone}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400"
      />

      <button
        type="submit"
        className="w-full mt-4 bg-[#6E1313] text-white font-bold py-3 rounded hover:bg-[#440000] transition"
      >
        Place Order
      </button>
    </form>
  );
}

export default Checkout;
