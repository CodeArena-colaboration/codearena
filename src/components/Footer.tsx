import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full p-6 justify-between bg-[rgba(40,39,39,1)] text-white">
      
      {/* Vision Section */}
      <div className="mb-6 md:mb-0 flex justify-center items-center">
  <h1
    className="text-2xl font-bold"
    style={{
      background: "linear-gradient(111.38deg, rgba(9, 167, 177, 1) 13.51%, rgba(194, 86, 30, 1) 59.02%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Interested In Our Vision?
  </h1>
</div>

      {/* Contact Section */}
      <div className="flex flex-col space-y-4 text-center md:text-left mb-6 md:mb-0 justify-center">
        <h1>
          If you would like to invest with us or have a 
          great investment proposal to discuss, 
          please shoot us a note.
        </h1>
        <button className="w-32 px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mx-auto block">
  Contact Us
</button>
</div>

{/* Social Media Section */}
<div className="flex flex-col space-y-2 text-center md:text-left">
  <h3 className="text-xl font-semibold">Follow Us On:</h3>
  <div className="flex flex-col space-y-2">
    <a href="#" className="hover:underline">LinkedIn</a>
    <a href="#" className="hover:underline">Instagram</a>
  </div>
</div>

</div>
)
}

export default Footer


    