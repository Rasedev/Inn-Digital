
import React from "react";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import SocialMedia from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import BannerVector1 from "../../assets/banner_vector1.png";
import ThreeDImg from "../../assets/man.png";
import CurveLineImg from "../../assets/CurveLine.png";
import etc from "../../assets/element.png";
import './Banner.css'




const Banner = () => {
  return (
    
      <div className="relative mx-auto flex flex-col-reverse lg:flex-row justify-around items-center pb-[50px] md:pb-[100px]  px-5 md:px-10  mt-[300px] md:mt-[100px]">
      {/* Left Content */}
      <div className="lg:w-[50%] w-full text-center lg:text-left my-10 lg:my-0 ">
        <img src={etc} alt="" className="hidden lg:block mx-auto lg:mx-0" />
        <p className="text-[30px] md:text-[40px] lg:text-[60px] font-extrabold font-Open text-[#192239] lg:w-[686px] leading-[40px] md:leading-[70px]  pt-0 md:pt-4">
          We Are Digital <span className="text-orange-500">Marketing</span>{" "}
          Agency
        </p>
        <p className="text-[#6C7D93] lg:w-[571px] leading-[30px] md:leading-[28px] text-[16px] md:text-[19px] my-[20px] font-paprika px-3 md:px-0">
          Use customer data to build great and solid product experiences that
          convert. Digital marketing’s development has changed the way brands
          and businesses use technology for marketing.
        </p>
        <button href="#"
          className="bg-orange-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-md md:text-lg font-Open font-semibold hover:bg-orange-600" > Get Free Quote</button>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-[40%] flex justify-center lg:block   ">
        
        <div className="absolute w-[45vw] md:w-[23vw] h-[45vw] md:h-[23vw] bg-[#C4C4C4] rounded-[30px] -top-[250px] md:-top-[200px] left-[115px] md:left-[170px] z-10 after:content-[''] after:absolute after:top-[50%] md:after:top-[55%] after:-left-[50%] md:after:left-[-50%] after:w-[45vw] md:after:w-[21vw] after:h-[45vw] md:after:h-[20vw] after:bg-[#C4C4C4] after:rounded-[30px] after:border-[10px] after:border-white "></div>

        <img
          src={BannerVector1}
          alt=""
          className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] absolute top-[-235px] right-[-68px] hidden lg:block "
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
          className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] absolute top-[75%] lg:top-[100px] lg:left-[-20%] z-[-500] hidden lg:block"
        />
        <img
          src={whatsapp}
          alt=""
          className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] absolute top-[85%] lg:top-[150px] lg:left-[80%] z-[-500] hidden lg:block"
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
