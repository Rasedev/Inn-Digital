
import React from "react";
import top from "../../assets/element.png";
import ServicesItem from "./Servicesitem";
import results from "../../assets/results.png";
import results0 from "../../assets/r0.png";
import results1 from "../../assets/r1.png";

const Services = () => {
  return (
    <section className="pb-[50px] md:pb-[100px]">
      <div className="max-w-[1170px] w-[90%] mx-auto py-[60px]">
        {/* Header Section */}
        <div className="w-full md:w-[332px] mx-auto text-center pb-[30px] md:pb-[52px]">
          <img src={top} alt="Top Element" className="mx-auto w-[100px] md:w-auto" />
          <h1 className="text-[30px] sm:text-[36px] md:text-[46px] font-Open font-extrabold leading-[40px] sm:leading-[50px] md:leading-[65px] tracking-[0.5px] pt-4 pb-[10px] text-[#192239]">
            Our Services
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#6C7D93] font-paprika font-normal leading-6 sm:leading-7 md:leading-8 text-center">
            We have been providing great flooring solutions service.
          </p>
        </div>

        {/* Services Items */}
        <div className="flex flex-col sm:flex-row justify-between gap-[20px] sm:gap-[30px]">
          <ServicesItem
            img={results}
            title="Marketing Strategy"
            des="Social Media has changed the way we interact & do business while creating"
            btn="Read more"
          />
          <ServicesItem
            img={results0}
            title="Social Marketing"
            des="Social Media has changed the way we interact & do business while creating a new avenue."
            btn="Read more"
          />
          <ServicesItem
            img={results1}
            title="Content Marketing"
            des="Content Marketing is the other fold of online advertisement. If you are looking to build"
            btn="Read more"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
