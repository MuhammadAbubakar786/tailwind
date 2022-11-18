import React from "react";

const Product = () => {
  return (
    <div className="bg-slate-100 flex justify-center items-center min-h-screen">
      <div className="rounded-2xl p-8 bg-white flex flex-col space-y-4  md:flex-row md:space-x-4 md:space-y-0">
        <div>
          <img
            alt=""
            src="headphone.png"
            className="mx-auto w-64 hover:scale-105 duration-200"
          />
        </div>
        <div className="flex flex-col space-y-3 mb-4 text-center md:text-left">
          <div>
            <p className="inline-block text-white text-sm bg-black py-1 px-3 rounded-full">
              Free Shipping
            </p>
          </div>
          <h2 className="max-w-sm text-2xl font-medium">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </h2>
          <div className="flex flex-col  space-y-3 text-center md:text-left">
            <p className="line-through">$799</p>
            <p className="text-5xl font-bold">$599</p>
            <p className="text-sm font-light text-gray-400">
              This offer is valid until April 3rd or as long as stock lasts!
            </p>
          </div>
          <div className="group">
            <button className=" transition-all duration-150 bg-blue-700 border-b-8 border-blue-700 w-full text-white rounded-lg group-hover:border-b-0 group-hover:border-t-8 group-hover:border-t-blue-700">
              <div className="duration-150 rounded-lg bg-blue-500 group-hover:bg-blue-700 px-8 py-4">
                Add to Cart
              </div>
            </button>
          </div>

          <div className="flex space-x-2 group items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full hover:animate-ping"></div>
            <p className="text-sm">50+ in stock</p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex justify-center space-x-3 items-center py-3 px-5 border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200  hover:bg-opacity-30">
              <img src="weight.png" className="w-8" alt="" />
              <span>Add to cart</span>
            </button>
            <button className="flex justify-center space-x-3 items-center py-3 px-5 border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200  hover:bg-opacity-30">
              <img src="heart.png" className="w-8" alt="" />
              <span>Add to wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
