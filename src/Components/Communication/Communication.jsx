
import React from "react";
import dot from "../../assets/dot.png";
import "./Comunicate.css";
import up from "../../assets/element.png";
import icon from "../../assets/1.png";
import icon0 from "../../assets/2.png";
import icon1 from "../../assets/3.png";
import icon2 from "../../assets/4.png";
import icon3 from "../../assets/5.png";
import icon4 from "../../assets/6.png";

const Communication = () => {
  return (
    <section className="pb-10 md:pb-20">
      <div className="flex flex-col md:flex-row justify-between max-w-[1115px] w-[90%] mx-auto relative pt-12 md:pt-24">
        {/* Left Section */}
        <div className="left before:content-[''] before:absolute before:l-[5vw] w-full md:w-[60%] md:before:w-[30vw] h-[50vh] md:h-auto before:h-[63vw] md:before:h-[30vw] before:bg-[#C4C4C4] before:rounded-[30px] flex justify-center md:block mb-6 md:mb-0 after:content-[''] after:absolute after:bg-[#C4C4C4] after:top-[22.5%] md:after:top-[55%] after:left-[10%] md:after:-left-[0%] after:w-[45vw] md:after:w-[25vw] after:h[45vw] md:after:h-[23vw] after:rounded-[30px] after:border-[10px] after:border-white">
          <img
            src={dot}
            alt="decorative dots"
            className="w-[120px] sm:w-[180px] md:w-[210px] h-auto absolute top-[12%] md:top-[30%] left-[35px] md:left-auto -z-10"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto text-center md:text-left pt-7">
          <div className="mx-auto md:mx-0 pb-8 md:pb-0 px-0 md:pl-[30px]">
            <img src={up} alt="Up Element" className="mx-auto md:mx-0" />
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-Open font-extrabold leading-[40px] sm:leading-[50px] md:leading-[65px] tracking-[0.5px] pt-4 pb-4 text-[#192239]">
              Who We Are
            </h1>
            <p className="w-full sm:w-[85%] md:w-[442px] text-[14px] sm:text-[16px] md:text-[18px] text-[#6C7D93] font-paprika leading-6 sm:leading-[30px] mx-auto md:mx-0 pb-[15px] md:pb-0">
              We are a Dhaka-based Digital Communication Agency committed to
              creating actionable strategies, online marketing & technology
              solutions for our partners. As a multidisciplinary company, we
              operate as a unified team.
            </p>
            <h3 className="font-paprika text-[12px] sm:text-[14px] leading-[17px] text-[#6C7D93] py-2">
              Join the 10,000+ Companies Trusting Us
            </h3>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 ">
            <img src={icon} alt="icon1" className="object-contain w-full h-auto" />
            <img src={icon0} alt="icon2" className="object-contain w-full h-auto" />
            <img src={icon1} alt="icon3" className="object-contain w-full h-auto" />
            <img src={icon2} alt="icon4" className="object-contain w-full h-auto" />
            <img src={icon3} alt="icon5" className="object-contain w-full h-auto" />
            <img src={icon4} alt="icon6" className="object-contain w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communication;
