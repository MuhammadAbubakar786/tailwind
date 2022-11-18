import React from "react";

const Feature = () => {
  return (
    <section id="Feature">
      <div className="sectionContainer py-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="images/image-computer.png"
              className="md:absolute top-0 right-[50%]"
            />
          </div>
          {/* Feature Container */}
          <div className="flex flex-col items-center space-y-12 md:max-w-1/2 mt-16  mb-12 md:mb-24 md:text-left md:pl-16">
            <div>
              <h5 className="text-2xl text-darkGrayishBlue font-bold">
                Quick Search
              </h5>
              <div className="max-w-md mt-2">
                <p className="text-xl text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-2xl text-darkGrayishBlue font-bold">
                iCloud Sync
              </h5>
              <div className="max-w-md mt-2">
                <p className="text-xl text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-2xl text-darkGrayishBlue font-bold">
                Completely History
              </h5>
              <div className="max-w-md mt-2">
                <p className="text-xl text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
