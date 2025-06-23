import React, { useState } from 'react';

function SellerDashboard() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image_url: '',
  });

  const [message, setMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('user')); // Get logged-in seller

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/add-art', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          seller_id: user.id, // Link art to logged-in seller
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Artwork uploaded successfully!');
        setFormData({
          title: '',
          description: '',
          category: '',
          price: '',
          image_url: '',
        });
      } else {
        setMessage(`❌ ${data.error || 'Upload failed'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('❌ Failed to upload artwork.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#6E1313]">Upload Artwork</h2>

      {message && (
        <p className="text-center mb-4 text-sm text-red-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-[#440000]">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            placeholder="Art title"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#440000]">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border rounded"
            placeholder="Brief description of the artwork"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#440000]">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. Madhubani, Warli, Pattachitra"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#440000]">Price (INR)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            placeholder="Price in ₹"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#440000]">Image URL</label>
          <input
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#6E1313] text-white font-bold py-2 rounded hover:bg-[#440000]"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default SellerDashboard;
