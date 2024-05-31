import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";

import grapes from "../assets/images/grape.jpg";

export default function Footer() {
  return (
    <div className="bg-footer mt-10 w-full  text-center p-1 relative">
      <img
        alt="photo"
        src={grapes}
        className=" w-[5em] h-[5em]  absolute top-0 -left-3 object-cover rounded-t-md rounded-r-full"
      />

      <div className="pt-7 pb-10 px-5 sm:px-10">
        <h3 className=" text-center pt-[1rem] font-medium text-text sm:text-subheading  p-1">
          Get <b>20%</b> off Discount Coupon by Subscribing to Our Newsletter
        </h3>
        <div className="py-5 flex items-center justify-center">
          <input
            placeholder="Email Address"
            className="text-xs px-3 sm:px-14 py-2 border-r-0 h-[2.5em] sm:h-[3.5em] rounded-l border-0 focus:border-0 outline-none "
          />
          <button className=" bg-black text-white h-[2.5em] sm:h-[3.5em] px-3 rounded-r text-xs border-0 font-semibold cursor-pointer">
            Get Coupon
          </button>
        </div>
      </div>

      <div className="border-t-2 border-dashed sm:flex justify-around p-2 border-fade  w-full">
        <div className="text-text flex justify-evenly gap-2 items-center">
          <div className="flex gap-3">
            <FaFacebookF />
            <FaInstagram />
          </div>

          <p className=" font-extralight text-[0.7rem]">
            {" "}
            @2024<b className="px-1">Freshy</b> All rights reserved
          </p>
        </div>
        <div className="text-text flex gap-5 justify-center my-2 sm:my-0">
          <FaCcPaypal className="h-8 w-8" />
          <RiVisaFill className="h-8 w-8" />
          <FaCcMastercard className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
