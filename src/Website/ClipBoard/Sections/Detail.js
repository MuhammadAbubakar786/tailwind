import React from "react";

const Detail = () => {
  return (
    <section id="Detail">
      <div className="sectionContainer my-20">
        <h3>Clipboard for iOS and MacOS</h3>
        <p className="max-w-3xl text-xl text-grayishBlue mx-auto text-center">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>
        <div className="buttonContainer mt-10">
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
  );
};

export default Detail;
