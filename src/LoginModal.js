import React from "react";

const LoginModal = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-rose-100 min-h-screen ">
        <div className="relative rounded-2xl shadow-2xl bg-white flex flex-col space-y-10 m-6 md:flex-row md:m-0 md:space-y-0 ">
          <div className="p-6 md:p-20">
            <h2 className="font-bold mb-4 text-4xl">Log In</h2>
            <p className="max-w-sm mb-12 font-light text-gray-600 ">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>
            <input
              type="text"
              className="w-full border-gray-400 border py-5 rounded placeholder:text-gray-400 placeholder:pl-5"
              placeholder="Enter your email address"
            />
            <div className="flex flex-col items-center mt-5 justify-between space-y-3 md:flex-row md:space-y-0">
              <p className="text-cyan-600 ">Forgot password</p>
              <button className="flex items-center justify-center w-full md:w-auto text-white bg-cyan-700 space-x-4 p-6 px-9 rounded-md shadow-lg shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border trasition hover:translate-y-0.5 duration-150">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 border-b-gray-100 border"></div>
            <div className="flex justify-center mt-6 text-gray-400">
              or login with
            </div>
            <div className="flex justify-between flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0 pt-5">
              <button className="flex items-center border border-gray-400 text-black justify-center px-12 py-2 rounded text-white">
                <img src="LoginModal/facebook.png" className="w-8  mr-1" />
                <span>Facebook</span>
              </button>
              <button className="flex items-center border border-gray-400 text-black justify-center px-12 py-2 rounded text-white">
                <img src="LoginModal/google.png" className="w-8  mr-1" />
                Google
              </button>
            </div>
          </div>
          <img
            src="LoginModal/image.jpg"
            className="w-[430px] hidden md:block"
            alt=""
          />
          <div className=" absolute -top-4 md:top-4 bg-gray-300 right-4 w-8 h-8 rounded-full md:bg-white flex justify-center items-center hover:-translate-y-0.5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-black group-hover:text-gray-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
