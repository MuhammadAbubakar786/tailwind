import React from "react";

const LoginUiDesign = () => {
  return (
    <>
      <div className="bg-[#F3F3F9] h-screen flex justify-center items-center">
        <div className="flex bg-white rounded-lg flex-col py-3 px-12">
          <h1 className="text-[#1D3153] font-bold text-lg">
            Enter your password
          </h1>
          <div className="flex space-x-2 mt-2 items-center">
            <img src="user.png" className="w-12" alt="" />
            <div className="flex flex-col ">
              <p className="text-[10px] text-[#132B50] font-medium">
                Business Account
              </p>
              <h1 className="text-sm font-bold text-[#132B50]">Sarah Bills</h1>
            </div>
          </div>

          <div className="mt-3 flex flex-col space-y-1">
            <p className="text-[10px] text-[#132B50] font-bold">Password</p>
            <div className="flex space-x-2 items-center ">
              <div className="rounded border flex items-center border-[#132B50]  p-2 ">
                <img src="lock.png" className="w-5" alt="" />
                <input
                  type="password"
                  className="border-none focus:outline-none text-xs  pl-1 pr-16"
                />
              </div>
              <button>
                <img src="hide.svg" className="w-5" alt="" />
              </button>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <label
                htmlFor="checked-toggle"
                className=" inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultValue
                  id="checked-toggle"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 text-[#132B50] bg-white border border-[#132B50] rounded-full transition-all duration-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#132b50] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#132b50] peer-checked:bg-[#132B50]" />
                <span className="text-[10px] pl-2  text-[#132B50] font-bold">
                  Stay Signed in
                </span>
              </label>
            </div>
            <button className=" group bg-[#132B50]  rounded py-2 mr-7 hover:bg-white  border border-[#132B50] transition duration-500">
              <p className="text-[10px] text-white px-3 group-hover:text-[#132B50]  transition duration-500">
                Continue
              </p>
            </button>
          </div>
          <p className="mt-3 text-[10px] text-[#132B50] underline font-bold cursor-pointer">
            Reset Password
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginUiDesign;
