import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Insta from "../images/pngegg.png";

const Footer = () => {
  return (
    <div>
      <div className="flex sm:flex-col justify-center items-center gap-10 mb-5 ">
        <p>
          <span className="font-bold">Address: </span> 19, Ogunsola st, Ogba,
          Lagos{" "}
        </p>
        <p>
          <span className="font-bold">Phone: </span> 08090909349{" "}
        </p>
        <div className="flex gap-2">
          <span className="font-bold">Follow: </span>{" "}
          <img src={Insta} alt="" width={25} />
        </div>
      </div>
      <p className="text-center mb-5">© Copyright 2023, Atuzal.</p>
    </div>
  );
};

export default Footer;
