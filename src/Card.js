import React from "react";

const Card = () => {
  const [Status, setStatus] = React.useState(true);
  return (
    <>
      <div className="bg-[#E5E5E5] min-h-screen flex justify-center items-center">
        {/* Wrapper Container*/}
        <div className="bg-[#4471F5]  rounded-xl flex ">
          {/* Card */}
          <div className="bg-white flex flex-col p-8 px-8 rounded-xl translate-x-8 translate-y-8">
            <h1 className="font-bold ">Ecovacs Deebot OZMO N8 + </h1>
            <div className="flex space-x-1 mt-2 items-center">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <p className="text-xs font-bold px-1">5.0</p>
              <div className="w-1 h-1 bg-gray-600 rounded-full "></div>
              <p className="text-xs underline text-[#747988]">14 reviews</p>
            </div>
            <h1 className="mt-3 text-xl font-bold">4395,-</h1>
            <div className="bg-[#E5E5E5] rounded-lg flex py-1 mt-3 px-2 items-center justify-between space-x-8">
              <p
                className={`trasition duration-200 cursor-pointer ${
                  Status
                    ? "text-xs bg-white rounded-lg px-2 py-1 text-black font-bold"
                    : "text-xs text-[#747988]"
                }`}
                onClick={() => setStatus(true)}
              >
                Deliver the item
              </p>
              <p
                className={`trasition duration-200 cursor-pointer ${
                  !Status
                    ? "text-xs bg-white rounded-lg px-2 py-1 text-black font-bold"
                    : "text-xs text-[#747988]"
                }`}
                onClick={() => setStatus(false)}
              >
                Pick up in store
              </p>
            </div>
            <div className="flex py-1 border rounded-lg border-[#D7D9E8]  mt-5 items-center space-x-3">
              <button className="pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-500 duration-200 hover:scale-110"
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
              <input
                type="text"
                className="border-none focus:outline-none text-xs font-medium"
              />
            </div>
            <div className="mt-3 rounded-lg border  border-[#D7D9E8] flex flex-col space-y-1 p-2">
              <div className="flex space-x-2 items-center">
                <h1 className="text-sm font-bold">Fyllingsdalen</h1>
                <div className="w-1 h-1 bg-gray-600 rounded-full "></div>
                <p className="text-sm  text-800">3.8 km away</p>
              </div>
              <p className="text-xs font-normal">Pick up in 5 days</p>
              <p className="text-[10px] font-normal text-gray-400">
                Closed,open tomorrow at 10:00
              </p>
              <button className="bg-[#4571F5] text-blue-100 text-xs py-2 rounded-xl">
                Add to cart
              </button>
            </div>
            <p className="py-3 text-[10px] uppercase font-medium text-[#747988] ">
              Get The Items Faster
            </p>
            <div className="rounded-lg border  border-[#D7D9E8] flex flex-col space-y-1 p-2">
              <div className="flex space-x-2 items-center">
                <h1 className="text-sm font-bold">Fana</h1>
                <div className="w-1 h-1 bg-gray-600 rounded-full "></div>
                <p className="text-sm  text-gray-800">7.1 km away</p>
              </div>
              <p className="text-xs font-normal">Pick up in 5 days</p>
              <p className="text-[10px] font-normal text-gray-400">
                Closed,open tomorrow at 10:00
              </p>
            </div>
            <div className="mt-3 rounded-lg border  border-[#D7D9E8] flex flex-col space-y-1 p-2">
              <div className="flex space-x-2 items-center">
                <h1 className="text-sm font-bold">Lagoon</h1>
                <div className="w-1 h-1 bg-gray-600 rounded-full "></div>
                <p className="text-sm  text-gray-800">83.6 km away</p>
              </div>
              <p className="text-xs font-normal">Pick up in 4 days</p>
              <p className="text-[10px] font-normal text-gray-400">
                Closed,open tomorrow at 10:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
