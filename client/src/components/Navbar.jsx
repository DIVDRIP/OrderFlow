import React from 'react'
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <img src={assets.logo} alt="" className='w-38 h-auto px-2 py-1' />

      <p className="text-sm text-gray-400">
        {new Date().toDateString()}
      </p>
    </div>
  );
};

export default Navbar;