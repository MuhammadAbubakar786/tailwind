import React from "react";

const CardUiDesign = () => {
  return (
    <div className="bg-[#FBBB2B] min-h-screen flex justify-center items-center relative ">
      <div className="flex justify-between md:space-x-32 md:flex-row flex-col space-y-4 md:space-y-0 space-x-0">
        <div className="bg-[#252D84]  lex flex-col py-10 px-4  rounded-2xl max-h-32">
          <div className="flex space-x-1 pr-32">
            <h1 className="text-white font-serif text-sm">Contributor</h1>
            <p className="bg-blue-900 text-[14px] font-serif text-white">10</p>
          </div>
          <div className="flex  mt-3">
            <img src="Ellipse 1.png" className="w-8" alt="" />
            <img src="Ellipse 2.png" className="w-8 -ml-2" alt="" />
            <img src="Ellipse 3.png" className="w-8  -ml-2" alt="" />
            <img src="Ellipse 4.png" className="w-8  -ml-2" alt="" />
            <div className="-ml-2 w-8 flex justify-center items-center item-center bg-white text-black text-xs rounded-full">
              <p className="text-xs font-bold ">+6</p>
            </div>
          </div>
        </div>
        <div className="bg-[#252D84]  flex flex-col  p-3 rounded-2xl ">
          <h1 className="text-white font-serif text-xs">About</h1>
          <p className="text-[8px] text-white max-w-[7rem] mt-2">
            Blender addon for reshaping UV selection into grid.
          </p>
          <div className="flex space-x-1 mt-2">
            <img src="23.png" alt="" className="w-4" />
            <p className="text-[10px] text-white">www.blendermarket.com</p>
          </div>
          <div className="flex space-x-1 mt-2">
            <img src="24.png" alt="" className="w-4" />
            <p className="text-[10px] text-white">1.1k stars</p>
          </div>
          <div className="flex space-x-1 mt-2">
            <img src="25.png" alt="" className="w-4" />
            <p className="text-[10px] text-white">80 watching</p>
          </div>
        </div>
      </div>
      <div className="bg-[#252D84]  flex flex-col  py-5 px-4  rounded-2xl max-h-32 absolute bottom-12 left-1/4 md:left-1/3 md:bottom-24">
        <h1 className="text-white font-serif text-sm pr-40">Languages</h1>
        <div className="flex  mt-3">
          <div className="w-24 h-2 rounded rounded-r-none bg-blue-300"></div>
          <div className="w-32 h-2 rounded rounded-l-none bg-amber-500"></div>
        </div>
        <div className="flex space-x-2 mt-3 items-center">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-300 "></div>
            <p className="text-[10px] text-white ">Python</p>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#FBBB2B] "></div>
            <p className="text-[10px] text-white">Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUiDesign;
