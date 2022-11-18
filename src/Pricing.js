import React from "react";

const Pricing = () => {
  return (
    <>
      {/* //Global Container */}
      <div className="flex justify-center items-center min-h-screen bg-slate-800">
        {/* Inner Container */}
        <div className="flex flex-col  my-6 space-y-6 md:space-x-6 md:space-y-0 md:flex-row md:my-0 ">
          {/* Col1 */}
          <div className="bg-slate-700 rounded-xl text-white">
            <div className="mx-3 mt-3 bg-slate-800 p-8 rounded-t-xl">
              <p className="text-center uppercase">Basic</p>
              <h2 className="text-5xl mt-10 font-serif text-center">100GB</h2>
              <p className="mt-2 text-center">$1.99/Month</p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className=" mx-6 py-3 px-10 hover:bg-violet-800 rounded-lg mt-5 border border-violet-600 duration-200"
                >
                  Purchase
                </a>
              </div>
            </div>
            <div className="border-t border-slate-700"></div>
            <div className="bg-slate-800 p-8 mx-3 mb-3 rounded-b-xl text-white">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">100 GB of storage</span>
                </div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">Option to add members</span>
                </div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">Extra member benefits</span>
                </div>
              </div>
            </div>
          </div>
          {/* Col2 */}
          <div className="bg-violet-700 rounded-xl text-white">
            <div className="mx-3 mt-3 bg-slate-800 p-8 rounded-t-xl">
              <p className="text-center uppercase">Basic</p>
              <h2 className="text-5xl mt-10 font-serif text-center">100GB</h2>
              <p className="mt-2 text-center">$1.99/Month</p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className=" mx-6 py-3 px-10  hover:bg-violet-800 bg-violet-700 rounded-lg mt-5 border border-violet-600 duration-200"
                >
                  Purchase
                </a>
              </div>
            </div>
            <div className="border-t border-slate-700"></div>
            <div className="bg-slate-800 p-8 mx-3 mb-3 rounded-b-xl text-white">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">100 GB of storage</span>
                </div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">Option to add members</span>
                </div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">Extra member benefits</span>
                </div>
              </div>
            </div>
          </div>
          {/* Col3 */}
          <div className="bg-slate-700 rounded-xl text-white">
            <div className="mx-3 mt-3 bg-slate-800 p-8 rounded-t-xl">
              <p className="text-center uppercase">Basic</p>
              <h2 className="text-5xl mt-10 font-serif text-center">100GB</h2>
              <p className="mt-2 text-center">$1.99/Month</p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className=" mx-6 py-3 px-10 hover:bg-violet-800 rounded-lg mt-5 border border-violet-600 duration-200"
                >
                  Purchase
                </a>
              </div>
            </div>
            <div className="border-t border-slate-700"></div>
            <div className="bg-slate-800 p-8 mx-3 mb-3 rounded-b-xl text-white">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">100 GB of storage</span>
                </div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">Option to add members</span>
                </div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1">Extra member benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
