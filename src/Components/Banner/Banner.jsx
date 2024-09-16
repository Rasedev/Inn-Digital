
import React from "react";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import SocialMedia from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import BannerVector1 from "../../assets/banner_vector1.png";
import ThreeDImg from "../../assets/man.png";
import CurveLineImg from "../../assets/CurveLine.png";
import etc from "../../assets/element.png";

const Banner = () => {
  return (
    <div className="relative mx-auto flex flex-col-reverse lg:flex-row justify-around items-center pb-[100px] pt-[100px] px-5 md:px-10">
      {/* Left Content */}
      <div className="lg:w-[50%] w-full text-center lg:text-left mb-10 lg:mb-0">
        <img src={etc} alt="" className="hidden lg:block mx-auto lg:mx-0" />
        <p className="text-[30px] md:text-[40px] lg:text-[60px] font-extrabold font-Open text-[#192239] lg:w-[686px]">
          We Are Digital <span className="text-orange-500">Marketing</span>{" "}
          Agency
        </p>
        <p className="text-[#6C7D93] lg:w-[571px] leading-[28px] md:leading-[36px] text-[16px] md:text-[20px] mt-[20px] mb-[32px] font-paprika">
          Use customer data to build great and solid product experiences that
          convert. Digital marketing’s development has changed the way brands
          and businesses use technology for marketing.
        </p>
        <a
          href="#"
          className="bg-orange-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-md md:text-lg font-semibold hover:bg-orange-600"
        >
          Get Free Quote
        </a>
      </div>

      {/* Right Content */}
      <div className="relative lg:w-[40%] w-full flex justify-center lg:block">
        {/* Background vector image */}
        <img
          src={BannerVector1}
          alt=""
          className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] absolute top-[-235px] right-[-68px] hidden lg:block"
        />
        
        {/* Social Media Icons */}
        <img
          src={SocialMedia}
          alt=""
          className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] absolute top-[60%] lg:-top-[155px] lg:left-[50px] z-[-500] hidden lg:block"
        />
        <img
          src={instagram}
          alt=""
          className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] absolute top-[75%] lg:top-[165px] lg:left-[0%] z-[-500] hidden lg:block"
        />
        <img
          src={whatsapp}
          alt=""
          className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] absolute top-[85%] lg:top-[165px] lg:left-[85%] z-[-500] hidden lg:block"
        />
        <img
          src={Twitter}
          alt=""
          className="absolute bottom-[100px] left-[20px] lg:bottom-[-250px] lg:left-[-780px] z-[-1000] w-[40px] h-[40px] md:w-[70px] md:h-[70px] hidden lg:block"
        />
        {/* 3D Image */}
        <img
          src={ThreeDImg}
          alt=""
          className="absolute top-[-40px] left-0 lg:top-[-40px] lg:left-[-940px] z-[1000] w-[200px] md:w-[300px] lg:w-auto hidden lg:block"
        />
        <img
          src={CurveLineImg}
          alt=""
          className="absolute top-[-150px] left-[-100px] lg:top-[-200px] lg:left-[-990px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Banner;
