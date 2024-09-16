// import React from "react";


// const Client = ({ img, title, des, btn }) => {
//   return (
//     <>
//       <div className="w-[350px] left-[373px] rounded-[20px] mx-auto">
//         <div className=" w-36 pt-[35px] pb-[28px]">
//           <img src={img} alt="icon" className="w-[120px] h-[64px]" />
//         </div>
//         <div className="">
//           <h2 className="text-[#202427] text-[45px] font-Open font-extrabold pb-5 leading-10 tracking-[0.5px]">
//             {title}
//           </h2>
//           <p className="text-[#6C7D93] text-[17px] font-paprika leading-[30px] pb-[20px] w-[320px] font-normal">
//             {des}
//           </p>

          
//         </div>
        
//       </div>
//     </>
//   );
// };

// export default Client;

const Client = ({ img, title, des }) => {
  return (
    <>
      <div className="w-[80%] md:w-[350px] h-full rounded-[20px] mx-auto px-5">
        <div className="w-36 pt-[35px] pb-[28px]">
          <img src={img} alt="icon" className="w-[120px] h-[64px]" />
        </div>
        <div>
          <h2 className="text-[#202427] text-[25px] md:text-[40px] font-Open font-extrabold pb-5 leading-10 tracking-[0.5px]">
            {title}
          </h2>
          <p className="text-[#6C7D93] text-[14px] md:text-[17px] font-paprika leading-[30px] pb-[20px] w-full md:w-[320px] font-normal">
            {des}
          </p>
        </div>
      </div>
    </>
  );
};

export default Client;