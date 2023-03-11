import React from "react";
import Logo from "../images/atuzal.png";

const Nav = () => {
  return (
    <div className="flex justify-center items-center p-10 ">
      <img src={Logo} alt="" className="w-[120px] sm:w-[90px] " />
    </div>
  );
};

export default Nav;
