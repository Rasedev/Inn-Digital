const Button = ({ tit, ...btnInfo }) => {
  return (
    <>
      <button
        type="button"
        className="py-3 md:py-3 text-white px-5 text-[18px] font-Open font-semibold hidden md:block ml-0 bg-[#FF7628] rounded-full hover:bg-orange-300 hover:text-[#FF7628]"
        {...btnInfo}
      >
        {tit}
      </button>
    </>
  );
};

export default Button;
