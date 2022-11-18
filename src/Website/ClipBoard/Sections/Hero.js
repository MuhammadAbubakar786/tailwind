import React from "react";

export const Hero = () => {
  return (
    <>
      <section id="Hero">
        <div className="sectionContainer  pt-16 mb-40">
          <img src="images/logo.svg" alt="" className="mx-auto py-16" />
          <h3>A history of everything you copy</h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="buttonContainer">
            <a
              href="#"
              rel=""
              className="bg-strongCyan text-white p-4 px-8 rounded-full text-xl hover:opacity-80 duration-200 shadow-lg"
            >
              Download for IOS
            </a>
            <a
              href="#"
              rel=""
              className="bg-lightBlue text-white p-4 px-8 rounded-full text-xl hover:opacity-80 duration-200 shadow-lg"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
