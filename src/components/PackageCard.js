import React from "react";

const PackageCard = ({ Img, OnClick }) => {
  return (
    <>
      <div className="flex flex-col justify-end items-center     transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="border-black border-[2px] rounded-[5px]">
          <img src={Img} alt="" />
        </div>
        <button
          className="text-white bg-slate-700 w-[100px] h-[40px] rounded-[5px] mt-2 hover:bg-slate-800  transition delay-150 duration-300 ... "
          onClick={OnClick}
        >
          Learn More
        </button>
      </div>
    </>
  );
};

export default PackageCard;
