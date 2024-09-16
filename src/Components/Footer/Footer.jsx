
import React from "react";
import Container from "../Layout/Container";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white py-8 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          <div className="flex flex-col items-center md:items-start">
            <img className="w-[135px] h-[73px]" src={logo} alt="Logo" />
            <p className="md:w-[449px] text-[#6C7D93] text-[16px] md:text-[18px] leading-6 text-center md:text-left mt-[44px] font-nunito font-normal px-3 md:px-0">
              Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-5 text-center md:text-center">
            <div>
              <h3 className="text-[#413F45] text-[20px] md:text-[24px] font-semibold mb-4 font-Open leading-[33px]">Features</h3>
              <ul className="text-[#6C7D93] text-[16px] md:text-[18px] font-medium font-nunito leading-[24px]">
                <li className="py-2"><a href="#">Home</a></li>
                <li className="py-2"><a href="#">About</a></li>
                <li className="py-2"><a href="#">Benefit</a></li>
                <li className="py-2"><a href="#">Pricing</a></li>
                <li className="py-2"><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#413F45] text-[20px] md:text-[24px] font-semibold mb-4 font-Open leading-[33px]">Products</h3>
              <ul className="text-[#6C7D93] text-[16px] md:text-[18px] font-medium font-nunito leading-[24px]">
                <li className="py-2"><a href="#">Task Management</a></li>
                <li className="py-2"><a href="#">Company Growth</a></li>
                <li className="py-2"><a href="#">Time Tracking</a></li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-[#413F45] text-[20px] md:text-[24px] font-semibold mb-4 font-Open leading-[33px]">Support</h3>
              <ul className="text-[#6C7D93] text-[16px] md:text-[18px] font-medium font-nunito leading-[24px]">
                <li className="py-2"><a href="#">Task Management</a></li>
                <li className="py-2"><a href="#">Company Growth</a></li>
                <li className="py-2"><a href="#">Time Tracking</a></li>
              </ul>
            </div>
          </div>

        </div>
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center pt-[80px] font-nunito font-normal">
            <h2 className="text-[#6C7D93] text-[16px] md:text-[18px]  ">
              @2024 Innovate. All rights reserved.
            </h2>
            <div className="text-[#6C7D93] text-[16px] md:text-[18px] mt-4 " >
              <a href="#" className="pr-4">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
      </Container>
    </div>
  );
};

export default Footer;
