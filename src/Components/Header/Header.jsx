
import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button.jsx";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  


  return (
    <section className=" text-[#192239] text-[18px] font-semibold font-Open py-5">
   
        <div className="max-w-[11700px] w-[90%] mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" className="z-50"/>
          <div className="flex items-center lg:hidden ml-[190px] md:ml-0">
            <button onClick={toggleMobileMenu} >
              {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
          <nav
            className={`lg:flex ${
              isMobileMenuOpen ? "hidden" : "hidden"
            } lg:block sm:hidden`}
          >
            <a href="#" className="px-4 text-[#FF7628] flex items-center">
              Home <MdKeyboardArrowDown className="ml-1 text-black" />
            </a>
            <a href="#" className="px-4  flex items-center">
              About <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Service <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Portfolio <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Price <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Blog <MdKeyboardArrowDown className="ml-1" />
            </a>
          </nav>
          <div className="hidden lg:block">
            <Button tit="Contact Us" />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div  className="lg:hidden px-5 md:px-0 py-7 md:py-0 leading-10">
            <nav className="">
            <a href="#" className="px-4 text-[#FF7628] flex items-center">
              Home <MdKeyboardArrowDown className="ml-1 text-black" />
            </a>
            <a href="#" className="px-4  flex items-center">
              About <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Service <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Portfolio <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Price <MdKeyboardArrowDown className="ml-1" />
            </a>
            <a href="#" className="px-4  flex items-center">
              Blog <MdKeyboardArrowDown className="ml-1" />
            </a> 
              <Button tit="Contact Us" className="py-2 text-white px-10 text-[18px] font-Open font-semibold bg-[#FF7628] rounded-full hover:bg-orange-300 hover:text-[#FF7628] mt-4 md:mt-0" />
            </nav>
          </div>
        )}
   
    </section>
  );
};

export default Header;
