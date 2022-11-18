import React from "react";

const WorkFlow = () => {
  return (
    <section>
      <div className="sectionContainer my-20">
        <h3>Supercharge your workflow</h3>
        <p className="text-xl text-grayishBlue max-w-3xl text-center mx-auto">
          We've got the tools to boost your productivity.
        </p>
        <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-20 max-w-6xl md:justify-center my-12">
          <div className="flex flex-col space-y-8 items-center ">
            <img src="images/icon-blacklist.svg" alt="" />
            <h5 className="text-2xl text-darkGrayishBlue font-bold">
              Create Blacklists
            </h5>
            <p className="max-w-md mx-auto text-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="flex flex-col space-y-8 items-center ">
            <img src="images/icon-text.svg" alt="" />
            <h5 className="text-2xl text-darkGrayishBlue font-bold">
              Plain Text Snippets
            </h5>
            <p className="max-w-md mx-auto text-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="flex flex-col space-y-8 items-center ">
            <img src="images/icon-preview.svg" alt="" />
            <h5 className="text-2xl text-darkGrayishBlue font-bold">
              Sneak Preview
            </h5>
            <p className="max-w-md mx-auto text-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
