
import React from "react";
import icon from "../../assets/element.png";

const Showcase = () => {
  return (
    <>
      <section className=" max-w-[1170px] w-[90%] mx-auto pt-[80px]">
        {/* Header Section */}
        <div className="w-full sm:w-[410px] mx-auto text-center pb-[20px] md:pb-[47px]">
          <img src={icon} alt="" className="mx-auto" />
          <h1 className="text-[32px] sm:text-[46px] font-Open font-extrabold leading-[40px] sm:leading-[65px] tracking-[0.5px] pt-4 pb-[15px] text-[#192239]">
            Work Showcase
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="font-Open text-[16px] md:text-[20px] text-[#6C7D93] font-semibold leading-3 md:leading-8 tracking-[0.5px] flex flex-wrap gap-5 md:gap-8 pb-[30px] px-5 md:px-0">
          <a href="" className="text-[#FF7628]">All</a>
          <a href="">Digital Mkt</a>
          <a href="">Branding</a>
          <a href="">Content Mkt</a>
          <a href="">Social Media Mkt</a>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pb-24">
          <div className="bg-gray-300 rounded-2xl p-4 h-[200px] lg:h-[340px]"></div>
          <div className="bg-gray-300 sm:col-span-2 lg:col-span-2 rounded-2xl p-4 h-[200px] lg:h-[340px]"></div>
          <div className="bg-gray-300 rounded-2xl p-4 h-[200px] lg:h-[340px]"></div>
          <div className="bg-gray-300 sm:col-span-2 lg:col-span-2 rounded-2xl p-4 h-[200px] lg:h-[340px]"></div>
          <div className="bg-gray-300 rounded-2xl p-4 h-[200px] lg:h-[340px]"></div>
          <div className="bg-gray-300 rounded-2xl p-4 h-[200px] lg:h-[340px]"></div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
