import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-zinc-800 h-screen ">
      <div className="flex flex-col md:flex-row bg-zinc-700 rounded-xl p-2">
        <img
          src="image.jpg"
          alt=""
          className="h-80 md:h-64 rounded-xl hover:scale-105 transition duration-150"
        />
        <div className="mt-5 px-8 py-5">
          <h1 className=" md:text-left text-white font-serif text-lg text-center">
            Get diet and fitness tips in your inbox
          </h1>
          <p className="text-xs md:text-left text-white leading-5 tracking-wide text-center max-w-xs">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter.
          </p>
          <div className="mt-5 space-y-4  md:space-x-3 flex flex-col md:flex-row md:space-y-0 justify-center">
            <input
              placeholder="Enter your email"
              className=" py-1 px-5  bg-zinc-800 border border-zinc-500 focus:outline-none text-center text-white placeholder:text-xs placeholder:md:text-left md:text-left "
            />
            <button className="bg-lime-500  px-5 rounded-md text-xs py-2 hover:bg-lime-700 hover:text-white duration-200">
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
