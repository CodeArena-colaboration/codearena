import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-[rgba(14,14,14,1)] fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full py-3 px-5">
        <div className="flex items-center space-x-4">
          <Image
            src='/Codearena_logo.svg'
            alt='Description of the image'
            width={69}
            height={100}
          />
          {/* Responsive Buttons */}
          <button className="bg-gray-800 border-2 border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold rounded py-3 px-6 text-sm md:text-base">
            Leaderboard
          </button>
          <button className="bg-gray-800 border-2 border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold rounded py-3 px-6 text-sm md:text-base">
            Connect
          </button>
          <button className="bg-gray-800 border-2 border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold rounded py-3 px-6 text-sm md:text-base">
            Compete
          </button>
          <button className="bg-gray-800 border-2 border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold rounded py-3 px-6 text-sm md:text-base">
            Chat
          </button>
        </div>
        <div className="ml-auto">
          <button className="bg-gray-800 hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold rounded border-2 border-[rgba(196,93,60,1)] py-2 px-6 text-sm md:text-base">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
