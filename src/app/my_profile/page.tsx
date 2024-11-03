import React from 'react';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[rgba(41,40,40,1)] w-full  min-h-screen mt-20 overflow-hidden">

        {/* Search Box */}
        <div className="h-[62px] justify-center relative" style={{ right: '450px',bottom:'30px' }}>
          <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
            <div className="overflow-hidden z-0 rounded-full relative p-3">
              <form role="form" className="relative flex z-50 bg-white rounded-full">
                <input
                  type="text"
                  placeholder="Enter your search here"
                  className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                />
                <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

 {/* boxx */} 
 
  {/* <div className="relative w-[123px] h-[102px] p-[2px] rounded-lg" style={{ left: '1310px', bottom: '33px' }}> */}
  {/* <!-- Inner Box with White Background --> */}
  {/* <div className="w-full h-full bg-gradient-to-r from-[rgba(58,54,54,1)] to-[rgba(58,54,54,1)] rounded-lg flex flex-col items-center justify-center space-y-1.5 p-4 border-2 border-[rgba(196,93,60,1)]">
     */}
    {/* <!-- First Row --> */}
    {/* <div className="text-center text-24px font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[rgba(9,167,177,1)] to-[rgba(9,89,95,1)] border-b border-[rgba(196,93,60,1)]">
      Sign Out
    </div> */}

    {/* <!-- Second Row --> */}
    {/* <div className="text-center text-24px font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[rgba(9,167,177,1)] to-[rgba(9,89,95,1)] border-b border-[rgba(196,93,60,1)]">
      Log Out
    </div> */}

    {/* <!-- Third Row --> */}
    {/* <div className="text-center text-24px font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[rgba(9,167,177,1)] to-[rgba(9,89,95,1)] border-b border-[rgba(196,93,60,1)]">
      Coins
    </div>
    </div>
        </div>  */}


 {/* boxx */}
  
        {/* Profile Section */}
        <div className="text-center">
  <br />
  <div className="flex items-center justify-start p-4 rounded-lg">
    {/* Circular Box */}
    <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#CC610A] to-[#17ACB6] flex items-center justify-center" style={{ marginLeft: '90px' }} />

    {/* Username Text */}
    <div>
      <h1 className="text-6xl font-bold mt-4 text-white" style={{ marginLeft: '90px' }}>
        Welcome to CodeArena
      </h1>
      <p className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[rgba(204,97,10,1)] to-[rgba(23,172,182,1)]">
        {"{userName}"}
      </p>
      <p className="text-sm text-gray-400">Bio and info here</p>
      {/* <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg">Edit Profile</button> */}
    </div>
  </div>
</div>

  {/* Profile Section */}

        {/* Achievements and Room Setup Section */}
        <div className="mt-10 flex justify-center space-x-10">
          <div className="box w-[250px] h-[200px] bg-[rgba(255,255,255,0.8)] rounded-md relative overflow-hidden group" style={{ right: '180px' }}>
            <img
              src="/trophy.svg"
              alt="Achievements"
              className="w-full h-full rounded-md transition-all duration-1000 ease-out object-cover group-hover:blur-[2px] group-hover:brightness-[80%]"
            />
            <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100">
              <p className="text-white font-extrabold text-center text-xl">My Achievements</p>
            </div>
          </div>

          <div className="box w-[250px] h-[200px] bg-[rgba(255,255,255,0.8)] rounded-md relative overflow-hidden group" style={{ right: '190px' }}>
            <img
              src="/human_running.svg"
              alt="Set Up Room"
              className="w-full h-full rounded-md transition-all duration-1000 ease-out object-cover group-hover:blur-[2px] group-hover:brightness-[80%]"
            />
            <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 transition-opacity duration-1000 ease-out hover:opacity-100">
              <p className="text-white font-extrabold text-center text-xl">Set Up Room</p>
            </div>
          </div> 

          {/* Online Room Box */}
          <div className="absolute bg-gray-800 h-[570px] w-[365px] rounded-lg text-center text-white shadow-lg border-2 border-[rgba(234,99,36,1)]" style={{ top: '230px', left: '1090px' }}>
            <div className="flex items-center justify-between pb-4 border-b border-gray-700">
              <p className="text-xl font-bold">Online Room</p>
              <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">Online</span>
            </div>
            <div className="mt-4 text-left">
              <p className="font-semibold">Soumik Saha</p>
              <p className="text-sm text-gray-400">Current Activity: Coding in Room #101</p>
            </div>
            <div className="mt-6">
              <button className="bg-orange-500 px-4 py-2 rounded-lg text-white w-full">Send Message</button>
            </div>
          </div>
        </div>
           <br />
           <br />
           <br />
           <br />
           {/* Stats Section */}
          {/* <div className="mt-10 text-center">
          <p className="text-xl">438 submissions in the past 6 months</p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p>Max Streak</p>
              <p className="text-2xl font-bold">44</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p>Current Streak</p>
              <p className="text-2xl font-bold">44</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-12 gap-1 text-center">
            <div className="bg-green-500 w-8 h-8 rounded"></div>
            <div className="bg-gray-500 w-8 h-8 rounded"></div>
          </div>
        </div> */}
  {/* <br />
  <br /><br />
  <div className="grid grid-cols-4 gap-4">
   Box with 8 lines 
   <div className="col-span-4 bg-gray-800 p-4 rounded-lg">
    <div className="space-y-2">
      {Array(8).fill(0).map((_, index) => (
        <p key={index} className="h-4 bg-gray-600 rounded w-full"></p>
      ))}
    </div>
  </div>
</div> */}
 {/* Posts Section */ }
 {/* <div className="mt-10">
          <h2 className="text-center text-2xl font-bold">My Posts</h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <p className="text-lg">Post Title 1</p>
              <div className="bg-gray-600 w-full h-32 mt-4"></div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <p className="text-lg">Post Title 2</p>
              <div className="bg-gray-600 w-full h-32 mt-4"></div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <p className="text-lg">Post Title 3</p>
              <div className="bg-gray-600 w-full h-32 mt-4"></div>
            </div>
          </div>
        </div> */}
           </div>
    </>
  ); 
};

export default Page;