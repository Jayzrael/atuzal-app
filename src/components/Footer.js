import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Insta from "../images/insta.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-10 mb-8 ">
      <p>
        Address: <span>19, Ogunsola st, Ogba, Lagos</span>{" "}
      </p>
      <div className="flex gap-2">
        <AiFillTwitterCircle
          size={25}
          color="blue"
          className="cursor-pointer"
        />
        <AiFillInstagram size={25} color="#ed4511" className="cursor-pointer" />
        <AiFillLinkedin size={25} color="blue" className="cursor-pointer" />
        <AiFillFacebook size={25} color="blue" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
