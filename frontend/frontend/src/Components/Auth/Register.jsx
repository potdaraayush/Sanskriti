import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
    sellerImage: null,
  });

  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmailFormat = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendOtp = async () => {
    if (!validateEmailFormat(formData.email)) {
      return setError('Invalid email format.');
    }

    try {
      const res = await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('OTP sent to email.');
        setShowOtpInput(true);
        setError('');
      } else {
        setError(data.error || 'Failed to send OTP.');
      }
    } catch (err) {
      setError('Error sending OTP.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsEmailVerified(true);
        setSuccess('Email verified successfully.');
        setError('');
      } else {
        setError(data.error || 'OTP verification failed.');
      }
    } catch (err) {
      setError('Error verifying OTP.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailVerified) {
      return setError('Please verify your email with OTP.');
    }

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      return setError('All fields are required.');
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords don't match.");
    }

    try {
      const data = new FormData();
      data.append('username', formData.username);
      data.append('email', formData.email);
      data.append('password', formData.password);
      data.append('role', formData.role);
      if (formData.role === 'seller' && formData.sellerImage) {
        data.append('seller_image', formData.sellerImage);
      }

      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: data,
      });

      const resData = await response.json();
      if (!response.ok) {
        setError(resData.error || 'Registration failed.');
      } else {
        setSuccess(resData.message);
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'buyer',
          sellerImage: null,
        });
        setIsEmailVerified(false);
        setShowOtpInput(false);
        setOtp('');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0000] to-[#3b0a0a] flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg border border-[#6E1313]"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#6E1313]">
          Register on <span className="text-[#440000]">Sanskriti</span>
        </h2>

        {error && <p className="text-red-600 text-sm mb-4 text-center font-medium">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4 text-center font-medium">{success}</p>}

        <div className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
            required
          />

          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
            required
          />

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSendOtp}
              className="flex-1 py-2 px-4 bg-[#6E1313] text-white rounded-md hover:bg-[#440000] transition"
            >
              Send OTP
            </button>
            {showOtpInput && !isEmailVerified && (
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="flex-1 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Verify OTP
              </button>
            )}
          </div>

          {showOtpInput && !isEmailVerified && (
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
            />
          )}

          <input
            name="password"
            type="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
            required
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E1313]"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>

          {formData.role === 'seller' && (
            <div>
              <label className="text-sm text-[#440000] font-medium block mb-1">Upload Seller Image (JPG/PNG)</label>
              <input
                type="file"
                name="sellerImage"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#6E1313] text-white font-bold py-2 mt-4 rounded-lg hover:bg-[#440000] transition"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
