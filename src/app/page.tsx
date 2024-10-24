import React from 'react'
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar /> 
      {/* image hover only */}

      <br />
      <br />

      <div className="w-full inline-block relative transition-all duration-500 ease-in group">
        {/* Regular img tag for direct control */}
        <img
          className="w-full h-full rounded-[4px] transition-all duration-1000 ease-out group-hover:blur-[10px] group-hover:brightness-[60%]"
          src="/worldmap 1.svg"
          alt="World map"
        />
        
        <div className="absolute top-1/2 left-1/2 z-10 w-full text-center px-5 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100 tracking-wide leading-normal">
          <h1 className="text-[2vw] mb-2 text-[rgba(118,210,218,1)]">Welcome TO Code Arena</h1>
          <p className="text-[1.5vw]">the ultimate battleground for programmers! Sharpen your skills by competing live with developers from around the world on topics you choose, like arrays, algorithms, or data structures. Challenge others, solve questions in real-time, and earn points based on speed and code efficiency. But that’s not all – connect with like-minded coders, chat, share your achievements, post updates, and grow together in this exciting fusion of coding and social networking. Dive in, compete, connect, and level up your coding game!</p>
        </div>
      </div>


 {/* boxes */}
 <div className="relative w-full h-screen bg-cover bg-center group" style={{ backgroundImage: "url('/codeareana_vs.svg')" }}>
        {/* Background image hover effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-1000 ease-out group-hover:blur-[5px] group-hover:brightness-[70%]"></div>

        {/* Four boxes in a row with images */}
        <div className="absolute inset-0 flex justify-center items-center space-x-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out">
          {/*  box1/////////////////////////////////////////////////////////////////// */}
            <div className="box w-[250px] h-[200px] bg-[rgba(255,255,255,0.8)] rounded-md relative">
  <img
    src="/box1.svg"
    alt="Box1 Image"
    className="w-full h-full rounded-md transition-opacity duration-500 ease-out hover:opacity-0"
  />
  <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 transition-opacity duration-500 ease-out hover:opacity-100">
    <p className='text-[rgba(245, 245, 245, 0.8)] font-bold'>chat with friends</p>
  </div>
</div>

              {/* Box 2 /////////////////////////////////////////////////////////////////////////////////*/}
              <div className="box w-[250px] h-[200px] bg-[rgba(255,255,255,0.8)] rounded-md relative">
  {/* Image inside the box */}
  <img
    src="/box2.svg"
    alt="Box 2 Image"
    className="w-full h-full rounded-md transition-opacity duration-500 ease-out hover:opacity-0"
  />
  
  {/* Text inside the box, hidden by default */}
  <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 transition-opacity duration-500 ease-out hover:opacity-100">
    <p className='text-[rgba(245, 245, 245, 0.8)] font-bold text-center'>Create room and compete with friends</p>
  </div>
</div>

                  {/* Box 3/////////////////////////////////////////////////// */}
   <div className="box w-[250px] h-[200px] bg-[rgba(255,255,255,0.8)] rounded-md relative">
  <img
    src="/box3.svg"
    alt="Box 3 Image"
    className="w-full h-full rounded-md transition-opacity duration-500 ease-out hover:opacity-0"
  />
  <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 transition-opacity duration-500 ease-out hover:opacity-100">
    <p className='text-[rgba(245, 245, 245, 0.8)] font-bold text-center'>Challenge online coder for 1V1  </p>
  </div>
</div>

             {/* Box 4 ////////////////////////////////////////////////////////////////////////*/}
             <div className="box w-[250px] h-[200px] bg-[rgba(255,255,255,0.8)] rounded-md relative">
  {/* Image inside the box */}
  <img
    src="/box4.svg"
    alt="Box 3 Image"
    className="w-full h-full rounded-md transition-opacity duration-500 ease-out hover:opacity-0"
  />
  
  {/* Text inside the box, hidden by default */}
  <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 transition-opacity duration-500 ease-out hover:opacity-100">
    <p className='text-[rgba(245, 245, 245, 0.8)] font-bold text-center'>Choose your favourite topics </p>
  </div>
</div>

          </div>
        </div>
    

    </>
  );
};

export default Home;