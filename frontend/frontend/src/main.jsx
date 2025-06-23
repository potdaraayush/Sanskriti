import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Category pages
import Paintings from './Components/CategoryPage/Paintings.jsx';

// Main Layout & Pages
import Layout from './Components/Layout/Layout.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';

// Auth Pages
import Register from './Components/Auth/Register.jsx';
import Login from './Components/Auth/Login.jsx';
import SendOtp from './Components/Auth/SendOtp';

// Seller Dashboard
import SellerDashboard from './Components/Seller/SellerDashboard.jsx';
import EditArt from './Components/Seller/EditArt.jsx';
import Cart from './Components/Cart/Cart.jsx';

// Welcome Landing Page
import Welcome from './Components/Welcome/Welcome.jsx';

// React Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public landing page */}
      <Route path="/" element={<Welcome />} />

      {/* Authentication pages */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<SendOtp />} />

      {/* Protected layout for app routes */}
      <Route path="/app" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="dashboard" element={<SellerDashboard />} />
        
        {/* Seller edit art routes */}
        <Route path="seller/edit-art" element={<EditArt />} />
        <Route path="seller/edit-art/:id" element={<EditArt />} />
        <Route path="/app/cart" element={<Cart />} />

        <Route path="category/paintings" element={<Paintings />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
