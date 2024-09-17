
import React from "react";

const ServicesItem = ({ img, title, des, btn }) => {
  return (
    <div className="w-full max-w-[370px] h-auto bg-[#EBF7E9] rounded-[20px] mx-auto text-center p-5 sm:p-6 lg:p-8">
      <div className="w-20 sm:w-24 lg:w-36 mx-auto pb-[28px]">
        <img src={img} alt="icon" className="w-16 h-16 mx-auto" />
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#202427] text-[22px] sm:text-[24px] lg:text-[29px] font-Open font-semibold mb-2 leading-7 lg:leading-9">
          {title}
        </h2>
        <p className="text-[#6C7D93] text-[16px] sm:text-[18px] leading-6 lg:leading-8 pb-[20px] font-paprika">
          {des}
        </p>
        <button className="text-[#202427] px-[10px] text-[16px] md:text-[18px] font-Open font-bold leading-6 hover:bg-orange-300 hover:text-[#FF7628] before:block before:absolute before:-inset-[0.3rem] before:rounded-full before:bg-[#FF7628] relative inline-block before:w-[33px] before:h-[33px] before:opacity-[50%]">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default ServicesItem;


