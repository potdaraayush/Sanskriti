import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const isSeller = user?.role === 'seller';
  const isBuyer = user?.role === 'buyer';

  return (
    <nav style={{ backgroundColor: '#6E1313' }} className="bg-white border-gray-200 dark:bg-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <Link to="home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            style={{ color: '#F4B3B3', fontSize: '60px', fontFamily: 'Philosopher, sans-serif' }}
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            Sanskriti
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            style={{ backgroundColor: '#440000', fontSize: '18px', padding: '5px' }}
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <Link
                to="home"
                className="py-6 px-6 text-white rounded md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="shop"
                className="py-6 px-6 text-white rounded md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500"
              >
                Shop
              </Link>
            </li>
            {isSeller && (
              <li>
                <Link
                  to="/app/dashboard"
                  className="py-2 px-4 text-white hover:bg-gray-700 rounded"
                >
                  Seller Dashboard
                </Link>
              </li>
            )}
           {isBuyer &&(
            <li>
              <Link
                to="cart"
                className="py-6 px-6 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              >
                🛒 Cart
              </Link>
            </li>
           )}
            <li>
              <Link
                to="about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
