import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        const user = data.user || { role: 'buyer' };
        localStorage.setItem('user', JSON.stringify(user));
        if (user.role === 'seller') {
          navigate('/app/dashboard');
        } else {
          navigate('/app/cart');
        }
      } else {
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/30 backdrop-blur-md p-10 rounded-xl shadow-lg z-20"
      >
        <h2 className="text-3xl font-bold text-center text-[#6E1313] mb-6">
          Login to <span className="text-[#440000]">Sanskriti</span>
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center font-medium">{error}</p>
        )}

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-[#440000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#6E1313] text-white font-bold rounded-lg hover:bg-[#440000] transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
