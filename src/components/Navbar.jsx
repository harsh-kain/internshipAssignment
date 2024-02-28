import React, { useState } from 'react';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="bg-gray-800 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 text-slate-700 px-3 py-1 rounded-md focus:outline-none focus:bg-gray-100"
            />
          </div>
        </div>
        
        {/* Right Section */}
        <div className="hidden md:flex items-center">
          <div className="mr-4">
            <a href="#" className="text-white hover:text-gray-300">
              Categories
            </a>
          </div>
          <div className="mr-4">
            <a href="#" className="text-white hover:text-gray-300">
              Website Builders
            </a>
          </div>
          <div className="mr-4">
            <a href="#" className="text-white hover:text-gray-300">
              Today Deals
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:bg-gray-700"
          >
            {collapsed ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Menu */}
      {!collapsed && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col items-center py-2">
            <a href="#" className="text-white hover:text-gray-300 py-2">
              Categories
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2">
              Website Builders
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2">
              Today Deals
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
