import React from "react";

const ImageGallery = () => {
  return (
    <>
      {/* Main Container */}
      <div className=" min-h-screen flex justify-center items-center bg-cyan-400">
        {/* Card Container */}
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
          {/* Menu  */}
          <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-8 md:space-y-0 md:justify-end md:mb-24">
            <div className="group">
              <a href="#">Vector</a>
              <div className="border-b-2 opacity-0 duration-300 group-hover:opacity-100 border-black mx-2 mt-2" />
            </div>
            <div className="group">
              <a href="#">Illustrations</a>
              <div className="border-b-2 opacity-0 duration-300 group-hover:opacity-100 border-black mx-2 mt-2"></div>
            </div>
            <div className="group">
              <a href="#">Images</a>
              <div className="border-b-2 opacity-0 duration-300 group-hover:opacity-100 border-black mx-2 mt-2"></div>
            </div>
            <div className="group">
              <a href="#">Icons</a>
              <div className="border-b-2 opacity-0 duration-300 group-hover:opacity-100 border-black mx-2 mt-2"></div>
            </div>
          </div>
          {/* Search */}
          <div className="flex flex-col justify-between space-y-3 md:flex-row md:space-y-0">
            {/* Input Container */}
            <div className="flex justify-between border-b">
              <input
                type="text"
                placeholder="Search"
                className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 text-gray-300 duration-200 hover:scale-110"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </button>
            </div>
            <button className="px-14 bg-black border border-black text-white rounded-lg py-3 hover:bg-white duration-200 hover:text-black">
              Upload
            </button>
          </div>
          {/* Image Galler */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="group relative">
              <img src="ImageGallery/Image1.jpg" className="w-72" />
              <div className="absolute opacity-0 bg-black bg-opacity-40 text-white group-hover:opacity-100 bottom-0 left-0 right-0 p-2 px-4">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Printing</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div>
                    <img src="ImageGallery/bookmark.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img src="ImageGallery/Image2.jpg" className="w-72" />
              <div className="absolute opacity-0 bg-black bg-opacity-40 text-white group-hover:opacity-100 bottom-0 left-0 right-0 p-2 px-4">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Printing</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div>
                    <img src="ImageGallery/bookmark.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img src="ImageGallery/Image3.jpg" className="w-72" />
              <div className="absolute opacity-0 bg-black bg-opacity-40 text-white group-hover:opacity-100 bottom-0 left-0 right-0 p-2 px-4">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Printing</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div>
                    <img src="ImageGallery/bookmark.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img src="ImageGallery/Image4.jpg" className="w-72" />
              <div className="absolute opacity-0 bg-black bg-opacity-40 text-white group-hover:opacity-100 bottom-0 left-0 right-0 p-2 px-4">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Printing</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div>
                    <img src="ImageGallery/bookmark.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img src="ImageGallery/Image5.jpg" className="w-72" />
              <div className="absolute opacity-0 bg-black bg-opacity-40 text-white group-hover:opacity-100 bottom-0 left-0 right-0 p-2 px-4">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Printing</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src="ImageGallery/bookmark.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img src="ImageGallery/Image6.jpg" className="w-72" />
              <div className="absolute opacity-0 bg-black bg-opacity-40 text-white group-hover:opacity-100 bottom-0 left-0 right-0 p-2 px-4">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Printing</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div>
                    <img src="ImageGallery/bookmark.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
