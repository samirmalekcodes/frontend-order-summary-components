/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../images/illustration-hero.svg";
import music from "../images/icon-music.svg";


const Cards = () => {
  return (
    <div className=" w-96 z-10 bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#C7D1F5]">
      {/* image div */}
      <div className="">
        <img src={image} className="w-full h-40 object-cover" />
      </div>
      {/* main content */}
      <div className="p-8 w-full text-center">
        <h1 className="font-bold text-2xl text-gray-700">Order Summary</h1>
        <p className="mt-4 text-gray-400">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like
        </p>
        {/* Parent div */}
        <div className="p-6 bg-[#F8F9FE] mt-5 rounded-lg flex justify-between items-center">
          {/* Plan */}
          <div className="flex h-full items-center">
            {/* music + options */}
            <div className="flex items-center">
              {/* music image */}
              <img src={music} />
              {/* options */}
              <div className="flex flex-col text-left ml-3">
                <p className="font-bold">Annual Plan</p>
                <p className="text-[#A3ABB6]">$59.99/year</p>
              </div>
            </div>
          </div>
          {/* Change link */}
          <div className="h-full ">
            <a href="#" className="text-blue-800 underline text-sm">
              Change
            </a>
          </div>
        </div>
        {/* buttons */}
        <div className="w-full mt-5 flex flex-col">
          <button className="bg-[#382AE1] text-white p-3 rounded-xl drop-shadow-[0_20px_20px_#CEC7FF] ">
            Proceed to payment
          </button>
          <a href="#" className="mt-6 z-20 font-bold text-sm text-gray-500">
            Cancel Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
