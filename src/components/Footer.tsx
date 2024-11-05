
// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start w-full p-6 justify-between bg-[rgba(40,39,39,1)] text-white">
      
//       {/* Vision Section */}
//       <div className="mb-6 md:mb-0 flex justify-center items-center">
//   <h1
//     className="text-2xl font-bold"
//     style={{
//       background: "linear-gradient(111.38deg, rgba(9, 167, 177, 1) 13.51%, rgba(194, 86, 30, 1) 59.02%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     }}
//   >
//     Interested In Our Vision?
//   </h1>
// </div>

//       {/* Contact Section */}
//       <div className="flex flex-col space-y-4 text-center md:text-left mb-6 md:mb-0 justify-center">
//         <h1>
//           If you would like to invest with us or have a 
//           great investment proposal to discuss, 
//           please shoot us a note.
//         </h1>
//         <button className="w-32 px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mx-auto block">
//   Contact Us
// </button>
// </div>

// {/* Social Media Section */}
// <div className="flex flex-col space-y-2 text-center md:text-left">
//   <h3 className="text-xl font-semibold">Follow Us On:</h3>
//   <div className="flex flex-col space-y-2">
//     <a href="#" className="hover:underline">LinkedIn</a>
//     <a href="#" className="hover:underline">Instagram</a>
//   </div>
// </div>

// </div>
// )
// }

// export default Footer


import React from "react";
//Previously imported modules are commented
//import { FaLinkedin } from "react-icons/fa";
//import { FaInstagramSquare } from "react-icons/fa";
//import { BsTwitterX } from "react-icons/bs";
//import Link from 'next/link';
//import Image from "next/image";


function Footer() {
  return (
    <div className="bg-gradient-to-r max-h-full from-[#1e1d1d] to-[#000000]  flex flex-col justify-between pt-10">
      <div className="flex items-center p-8">
        {/* Left Section */}
        <div className="flex flex-col w-1/2">
          <div className="pl-8  px-15 leading-snug text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#09A7B1] via-[#c3551e] to-[#ea5b13]">
            Interested in Our Vision?
          </div>
        </div>

        {/* Right Section */}
        <div className="justify-between pl-20 w-1/2 text-white flex flex-row ">
          <div className="w-1/3">
            <p className="mb-4 text-xl">
              If you'd like to invest with us, or have a great investment
              proposition to discuss, please shoot us a note.
            </p>
            <button className="text-lg px-3 py-2 border-2 rounded-full border-[#09A7B1] text-[#09A7B1] transition-all  hover:bg-[#ea5b13] hover:text-[white] hover:border-[white]
             p-[2px] ">
              Contact us
            </button>
          </div>

          <div className="w-1/2 pl-4">
            <p className="text-2xl">Follow us on:</p>
            <div className="flex flex-col mt-4">
              {/* LinkedIn Link */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <div className="flex group">
                  <img
                    className="w-40"
                    src="/linkedln link.svg"
                    alt="LinkedIn"
                  />
                  <img
                    className="transition-transform duration-500 ease group-hover:rotate-45"
                    src="/Arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </a>

              {/* Instagram Link */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <div className="flex pt-5 group">
                  <img
                    className="w-40"
                    src="/instagram link.svg"
                    alt="Instagram"
                  />
                  <img
                    className="transition-transform duration-500 ease group-hover:rotate-45"
                    src="/Arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright info */}
      <div className="flex items-center pb-2 text-lg mt-8 text-white">
        <h1 className="font-bold pl-7">&copy; Copyright 2024 CodeArena Inc.</h1>
        <p className="ml-4">All rights reserved.</p>
        <ul className="pl-7 list-disc flex space-x-7 cursor-pointer underline underline-offset-4">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;