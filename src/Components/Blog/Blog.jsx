
import React from 'react';
import icon from '../../assets/element.png';
import BlogG from './BlogG';

const Blog = () => {
  return (
    <>
      <section className=" max-w-[1170px] w-[90%] mx-auto pt-[80px] pb-[100px]">
        <div className="text-center pb-[52px]">
          <img src={icon} alt="Blog Icon" className="mx-auto mb-4" />
          <h1 className="text-[32px] md:text-[46px] font-Open font-extrabold leading-[40px] md:leading-[65px] tracking-[0.5px] text-[#192239]">
            Our Latest Blog
          </h1>
          <p className="text-[16px] md:text-[18px] w-full md:w-[412px] text-[#6C7D93] font-roboto font-normal leading-[1.9rem] mx-auto pt-6">
            We provide digital experience services to startups and small businesses.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6">
          <BlogG
            title='How to Be Ahead of Stock Changes'
            des='By John - 5 Comments'
            btn='Read more'
          />
          <BlogG
            title='Online Reputation And Management'
            des='By Amin - 10 Comments'
            btn='Read more'
          />
          <BlogG
            title='Tips To Move Your Project More Forward'
            des='By Insider - 15 Comments'
            btn='Read more'
          />
        </div>
      </section>
    </>
  );
}

export default Blog;
