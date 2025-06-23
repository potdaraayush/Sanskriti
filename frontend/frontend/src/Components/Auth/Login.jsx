import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setError('Both fields are required.');
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed.');
        return;
      }

      localStorage.setItem('user', JSON.stringify(data));
      navigate(`/app/${data.role === 'seller' ? 'dashboard' : 'shop'}`);
    } catch (err) {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0F0000] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border-2 border-[#6E1313]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#6E1313]">Login</h2>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <label className="block mb-2 text-[#440000] font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
        />

        <label className="block mb-2 text-[#440000] font-semibold">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-[#6E1313] text-white font-bold py-2 rounded-lg transition ${
            loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#440000]'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
