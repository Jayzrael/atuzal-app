import React from "react";
import Images from "./Images";

const ImagesSection = () => {
  return (
    <>
      <h1 className="text-center text-[24px] font-bold mt-20 mb-5 bg-yellow-600">
        IMAGES
      </h1>
      <div className="flex flex-col justify-center items-center mb-10">
        <Images />
        <button className="text-white bg-slate-700 w-[140px] h-[40px] rounded-[5px] mt-2 hover:bg-slate-800  transition delay-150 duration-300 ... ">
          <a href="http://www.atuzalstudio.com">View More</a>
        </button>
      </div>
    </>
  );
};

export default ImagesSection;
