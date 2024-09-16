// import React from "react";


// const BlogG = ({ img, title, des, btn }) => {
//   return (
//     <>
//       <div className="w-[369px] md:w-[369px] h-[468px] rounded-[20px]  relative">
//         <div className=" before:absolute before:w-[369px] before:md:w-[369px] before:h-[240px]  before:bg-[#C4C4C4] before:rounded-t-[20px]">
         
//         </div>
//         <div className="absolute w-full top-[51%] bg-[#f8f8f899] rounded-b-[20px] py-[30px] pl-[30px]">
//           <h2 className="w-[235px] text-[#413F45] text-[24px] font-work font-medium pb-4 leading-8 ">
//             {title}
//           </h2>
//           <p className="text-[#6C7D93] text-[17px] font-nunito leading-[30px] pb-[30px] w-[320px] font-normal">
//             {des}
//           </p>
//           <button className="text-[#202427] px-3 text-[18px] font-Open font-bold leading-6 hover:bg-orange-300 hover:text-[#FF7628] before:block before:absolute before:-inset-1 before:rounded-full before:bg-[#FF7628] relative inline-block before:w-[33px] before:h-[33px] before:opacity-[50%]">
//               {btn}
//             </button>
          
//         </div>
        
//       </div>
//     </>
//   );
// };

// export default BlogG;

// import React from "react";

// const BlogG = ({ img, title, des, btn }) => {
//   return (
//     <div className="relative max-w-[369px] mx-auto mb-8">
//       <div className="relative bg-[#C4C4C4] rounded-t-[20px] w-full h-[240px] md:h-[200px]">
//         {/* If you have an image, you can add it here */}
//         {img && <img src={img} alt="Blog" className="w-full h-full object-cover rounded-t-[20px]" />}
//       </div>
//       <div className="absolute w-full top-[51%] bg-[#f8f8f899] rounded-b-[20px] py-[30px] pl-[20px] md:py-[20px] md:pl-[20px]">
//         <h2 className="text-[#413F45] text-[20px] md:text-[24px] font-work font-medium pb-4 leading-8">
//           {title}
//         </h2>
//         <p className="text-[#6C7D93] text-[14px] md:text-[17px] font-nunito leading-[30px] pb-[20px]">
//           {des}
//         </p>
//         <button className="text-[#202427] px-3 py-2 text-[14px] md:text-[18px] font-Open font-bold leading-6 hover:bg-orange-300 hover:text-[#FF7628] before:block before:absolute before:-inset-1 before:rounded-full before:bg-[#FF7628] relative inline-block before:w-[33px] before:h-[33px] before:opacity-[50%]">
//           {btn}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogG;



import React from "react";
import "./Blog.css"


const BlogG = ({ img, title, des, btn }) => {
  return (
    <div className="relative w-full md:w-[369px] h-auto md:h-[468px] rounded-[20px] ">
      <div className="inset-0">
        <div className="w-full h-[250px] md:h-[250px] bg-[#C4C4C4] rounded-t-[20px]"></div>
      </div>
      <div className=" inset-0 top-[54%] bg-[#f8f8f899] rounded-b-[20px] py-[30px] pl-[30px] text-base sm:text-lg md:text-xl lg:text-2xl">
        <h2 className="family w-[215px] md:w-[255px] text-[#413F45] text-[20px] md:text-[24px]  font-medium pb-4 leading-8 ">
          {title}
        </h2>
        <p className="text-[#6C7D93] text-[16px] md:text-[17px] font-nunito leading-[30px] pb-[30px]">
          {des}
        </p>
        <button className="text-[#202427] px-3 text-[16px] md:text-[18px] font-Open font-bold leading-6 hover:bg-orange-300 hover:text-[#FF7628] before:block before:absolute before:-inset-1 before:rounded-full before:bg-[#FF7628] relative inline-block before:w-[33px] before:h-[33px] before:opacity-[50%]">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default BlogG;
