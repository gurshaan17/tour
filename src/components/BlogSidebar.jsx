// src/components/Sidebar.js
import React from 'react';
import bg from '../assets/bg.png'

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/3 p-6">
      <div className="bg-white shadow-md rounded p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Category</h3>
        <ul>
          <li className="text-gray-600 mb-2">Resaurant food (37)</li>
          <li className="text-gray-600 mb-2">Travel news (10)</li>
          <li className="text-gray-600 mb-2">Modern technology (03)</li>
          <li className="text-gray-600 mb-2">Product (11)</li>
          <li className="text-gray-600 mb-2">Inspiration (21)</li>
          <li className="text-gray-600 mb-2">Health Care (21)</li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-4">Recent Post</h3>
        <ul>
          <li className="text-gray-600 mb-2">
            <a href="#" className="flex items-center">
              <img src={bg} alt="post" className="w-10 h-10 mr-2" />
              From life was you fish...
              <br />
              <span className="text-sm text-gray-500">January 12, 2019</span>
            </a>
          </li>
          <li className="text-gray-600 mb-2">
            <a href="#" className="flex items-center">
              <img src={bg} alt="post" className="w-10 h-10 mr-2" />
              The Amazing Hubble
              <br />
              <span className="text-sm text-gray-500">02 Hours ago</span>
            </a>
          </li>
          <li className="text-gray-600 mb-2">
            <a href="#" className="flex items-center">
              <img src={bg} alt="post" className="w-10 h-10 mr-2" />
              Astronomy Or Astrology
              <br />
              <span className="text-sm text-gray-500">03 Hours ago</span>
            </a>
          </li>
          <li className="text-gray-600 mb-2">
            <a href="#" className="flex items-center">
              <img src={bg} alt="post" className="w-10 h-10 mr-2" />
              Asteroids telescope
              <br />
              <span className="text-sm text-gray-500">01 Hours ago</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
