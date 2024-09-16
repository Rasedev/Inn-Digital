
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Client from "./Client";
import icon from "../../assets/element.png";
import icon0 from "../../assets/7.png";
import "./Rivew.css";

const Review = () => {
  return (
    <>
      <section className="pb-[100px]">
        <div className=" max-w-[1170px] w-[90%] mx-auto pt-[80px] relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1} // Set default for mobile
            breakpoints={{
              // Adjust slidesPerView based on screen size
              640: {
                slidesPerView: 1, // Small screens
              },
              768: {
                slidesPerView: 2, // Medium screens
              },
              1024: {
                slidesPerView: 3, // Larger screens
              },
            }}
            loop={true}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100, // Adjust to control the 3D perspective depth
              modifier: 1, // Controls the scale of the effect
              slideShadows: true, // Enable slide shadows
            }}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
          >
               {/* Swiper Slide 2 */}
             <SwiperSlide>
              <div className="w-[80%]  md:w-[370px] h-[378px] bg-[#D8EAFF] rounded-[20px] px-6 md:px-[3.2rem] ml-[30px] md:ml-0">
                <p className="font pt-10 text-[14px] md:text-[17px] leading-[30px] text-[#6C7D93]">
                  Content Marketing is the another fold of online advertisement. If
                  you are looking to build digital marketing campaigns are
                  becoming more prevalent and efficient.
                </p>
                <div className="flex justify-end px-0 md:px-5 pt-6 items-end gap-4">
                  <img src={icon0} alt="icon" className="w-[37px] h-[37px]" />
                  <div>
                    <h1 className="font-Open font-semibold text-[18px] md:text-[24px] leading-8">
                      Jane Cooper
                    </h1>
                    <h3 className="font-Open font-normal text-[14px] md:text-[18px]">
                      Fashion Designer
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

             {/* Swiper Slide 3 */}
            <SwiperSlide>
              <div className="w-[80%] md:w-[370px] h-[378px] bg-[#faf8f882] rounded-[20px] px-6 md:px-[3.2rem] ml-[30px] md:ml-0">
                <p className="font pt-10 text-[14px] md:text-[17px] leading-[30px] text-[#6C7D93]">
                  Content Marketing is another fold of online advertisement.
                  Digital marketing campaigns are becoming more prevalent and
                  efficient.
                </p>
                <div className="flex justify-between pt-6 md:pt-5 items-end gap-4">
                  <div className="relative">
                    <div className="w-[75px] h-[75px] md:w-[90px] md:h-[90px] bg-[#C4C4C4] rounded-full"></div>
                    <img
                      src={icon0}
                      alt="icon"
                      className="w-[37px] h-[37px] absolute bottom-0 -right-[20%]"
                    />
                  </div>
                  <div className="pb-5">
                    <h1 className="font-Open font-semibold text-[18px] md:text-[24px] leading-8">
                      Eleanor Pena
                    </h1>
                    <h3 className="font-Open font-normal text-[14px] md:text-[18px]">
                      Architect
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>   

            {/* Swiper Slide 1 */}
            <SwiperSlide>
              <Client
                img={icon}
                title="Client Review"
                des="People use digital devices instead of visiting physical shops. Digital marketing campaigns are becoming more prevalent and efficient."
              />
            </SwiperSlide>
           

            {/* Swiper Slide 2 */}
            <SwiperSlide>
              <div className="w-[80%]  md:w-[370px] h-[378px] bg-[#D8EAFF] rounded-[20px] px-6 md:px-[3.2rem] ml-[30px] md:ml-0">
                <p className="font pt-10 text-[14px] md:text-[17px] leading-[30px] text-[#6C7D93]">
                  Content Marketing is the another fold of online advertisement. If
                  you are looking to build digital marketing campaigns are
                  becoming more prevalent and efficient.
                </p>
                <div className="flex justify-end px-0 md:px-5 pt-6 items-end gap-4">
                  <img src={icon0} alt="icon" className="w-[37px] h-[37px]" />
                  <div>
                    <h1 className="font-Open font-semibold text-[18px] md:text-[24px] leading-8">
                      Jane Cooper
                    </h1>
                    <h3 className="font-Open font-normal text-[14px] md:text-[18px]">
                      Fashion Designer
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>  

             {/* Swiper Slide 1 */}
            <SwiperSlide>
              <Client
                img={icon}
                title="Client Review"
                des="People use digital devices instead of visiting physical shops. Digital marketing campaigns are becoming more prevalent and efficient."
              />
            </SwiperSlide>                 

           
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Review;
