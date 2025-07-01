import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Layout & General Pages
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Welcome from './Components/Welcome/Welcome.jsx';
import CategoryPage from './Components/CategoryPage/CategoryPage.jsx'; // ✅ Modular category page

// Auth Pages
import Register from './Components/Auth/Register.jsx';
import Login from './Components/Auth/Login.jsx';
import SendOtp from './Components/Auth/SendOtp.jsx';

// Seller Dashboard & Art Pages
import SellerDashboard from './Components/Seller/SellerDashboard.jsx';
import EditArt from './Components/Seller/EditArt.jsx';

// Cart Page
import Cart from './Components/Cart/Cart.jsx';

// Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// ✅ Create router structure
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Landing page */}
      <Route path="/" element={<Welcome />} />

      {/* Authentication routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<SendOtp />} />

      {/* App layout and nested routes */}
      <Route path="/app" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="dashboard" element={<SellerDashboard />} />

        {/* Art management */}
        <Route path="seller/edit-art" element={<EditArt />} />
        <Route path="seller/edit-art/:id" element={<EditArt />} />

        {/* Dynamic category pages */}
        <Route path="category/:categoryName" element={<CategoryPage />} />

        {/* Cart, About, Contact */}
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

// ✅ Render to root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
