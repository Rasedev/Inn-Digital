

import React from "react";
import icon from "../../assets/element.png";

const Creative = () => {
  return (
    <>
      <section className=" max-w-[1170px] w-[90%] mx-auto pt-[80px] pb-[100px]">
        {/* Header Section */}
        <div className="w-full md:w-[556px] mx-auto text-center pb-[52px]">
          <img src={icon} alt="" className="mx-auto" />
          <h1 className="text-[26px] md:text-[46px] font-Open font-extrabold leading-[40px] md:leading-[65px] tracking-[0.5px] pt-4 pb-[15px] text-[#192239]">
            Our creative process.
          </h1>
          <p className="text-[16px] md:text-[18px] w-full md:w-[412px] text-[#6C7D93] font-roboto font-normal leading-7 md:leading-8 mx-auto">
            We provide digital experience services to startups and small
            businesses.
          </p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Text Section */}
          <div className="bg-[#EBF7E9] w-full md:w-[465px] h-auto md:h-[207px] rounded-[20px] px-6 py-6 mb-6 md:mb-0">
            <button className="text-[#202427] px-[10px] text-[16px] md:text-[18px] font-Open font-bold leading-6 hover:bg-orange-300 hover:text-[#FF7628] before:block before:absolute before:-inset-[0.3rem] before:rounded-full before:bg-[#FF7628] relative inline-block before:w-[33px] before:h-[33px] before:opacity-[50%]">
              Step-1
            </button>
            <h1 className="text-[21px] md:text-[30px] font-Open font-semibold leading-[32px] pt-4 pb-[20px] text-[#202427]">
              Global SEO Research
            </h1>
            <p className="text-[16px] md:text-[18px] w-full md:w-[356px] text-[#6C7D93] font-roboto font-normal leading-7 md:leading-[30px]">
              Practical tools and features make it easier to build and manage
              your site.
            </p>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[555px] h-[200px] md:h-[324px] rounded-[20px] bg-[#C4C4C4]"></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-8">
          {/* Image Section */}
          <div className="w-full md:w-[555px] h-[200px] md:h-[324px] rounded-[20px] bg-[#C4C4C4] mb-6 md:mb-0"></div>
          {/* Text Section */}
          <div className="bg-[#EBF7E9] w-full md:w-[465px] h-auto md:h-[207px] rounded-[20px] px-6 py-6">
            <button className="text-[#202427] px-[10px] text-[16px] md:text-[18px] font-Open font-bold leading-6 hover:bg-orange-300 hover:text-[#FF7628] before:block before:absolute before:-inset-[0.3rem] before:rounded-full before:bg-[#FF7628] relative inline-block before:w-[33px] before:h-[33px] before:opacity-[50%]">
              Step-2
            </button>
            <h1 className="text-[21px] md:text-[30px] font-Open font-semibold leading-[32px] pt-4 pb-[20px] text-[#202427]">
              Social media integration
            </h1>
            <p className="text-[16px] md:text-[18px] w-full md:w-[356px] text-[#6C7D93] font-roboto font-normal leading-7 md:leading-[30px]">
              Practical tools and features make it easier to build and manage
              your site.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Text Section */}
          <div className="bg-[#EBF7E9] w-full md:w-[465px] h-auto md:h-[207px] rounded-[20px] px-6 py-6 mb-6 md:mb-0">
            <button className="text-[#202427] px-[10px] text-[16px] md:text-[18px] font-Open font-bold leading-6 hover:bg-orange-300 hover:text-[#FF7628] before:block before:absolute before:-inset-[0.3rem] before:rounded-full before:bg-[#FF7628] relative inline-block before:w-[33px] before:h-[33px] before:opacity-[50%]">
              Step-3
            </button>
            <h1 className="text-[21px] md:text-[30px] font-Open font-semibold leading-[32px] pt-4 pb-[20px] text-[#202427]">
              Launching the Application
            </h1>
            <p className="text-[16px] md:text-[18px] w-full md:w-[356px] text-[#6C7D93] font-roboto font-normal leading-7 md:leading-[30px]">
              Practical tools and features make it easier to build and manage
              your site.
            </p>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[555px] h-[200px] md:h-[324px] rounded-[20px] bg-[#C4C4C4]"></div>
        </div>
      </section>
    </>
  );
};

export default Creative;
