import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 w-full mt-5">
      <div className="container mx-auto flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-1/3 px-4">
          <h4 className="text-lg font-bold mb-4">Categories</h4>
          <ul>
            <li className="mb-2">Web builder</li>
            <li className="mb-2">Hosting</li>
            <li className="mb-2">Data center</li>
            <li className="mb-2">Robotics-automation</li>
          </ul>
        </div>
        {/* Mid Section */}
        <div className="w-full md:w-1/3 px-4">
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <ul>
            <li className="mb-2">Contact</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms of Services</li>
            <li className="mb-2">Categories</li>
            <li className="mb-2">About</li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/3 px-4">
          <h4 className="text-lg font-bold mb-4">Select Country</h4>
          <select className="w-full bg-gray-900 text-white p-2 rounded">
            <option value="">Select</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
