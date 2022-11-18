/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <section id="Footer" className="bg-gray-50">
      <div className="sectionContainer">
        <div className="flex flex-col items-center justify-between md:flex-row  cursor-pointer">
          <img src="images/logo.svg" alt="" className="scale-50" />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:space-y-0 md:mb-0 text-grayishBlue">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <div className="flex flex-col space-y-4 text-center  md:text-left">
                <div>
                  <a href="#" rel="" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" rel="" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center  md:text-left">
                <div>
                  <a href="#" rel="" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" rel="" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center  md:text-left">
                <div>
                  <a href="#" rel="" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
            <div className="flex  items-center w-32 justify-between py-1">
              <img src="images/icon-facebook.svg" className="ficon" alt="" />
              <img src="images/icon-twitter.svg" className="ficon" alt="" />
              <img src="images/icon-instagram.svg" className="ficon" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
