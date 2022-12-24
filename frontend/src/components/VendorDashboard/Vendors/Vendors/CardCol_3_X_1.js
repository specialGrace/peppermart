import React from "react";
import Card2_5 from "../../../components/Cards/Card2_5";
import Card1_5 from "../../../components/Cards/Card1_5";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const CardCol3X1 = () => {
  return (
    <div className="w-full flex justify-between items-center my-6 flex-wrap md:flex-nowrap">


      <div className="w-[500px] sm:w-[550px] h-[124px] mb-2 mx-12 md:mx-0 md:mr-3 px-2 bg-white rounded-xl drop-shadow-md">
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-[12px] px-[10px]">
            <HiOutlineShoppingBag className="text-[20px]" />
            <div className="flex justify-between items-center">
              <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                This week
              </span>
              <BsChevronDown className="cursor-pointer" />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="text-peppermartDark30 text-[14px]">All Vendors</p>
              <p className="text-peppermartDark30 text-[14px]">Active</p>
              <p className="text-peppermartDark30 text-[14px]">In active</p>
            </div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="flex items-center text-peppermartDark60 text-[20px]">
                <span>30</span>
                <span className="text-red-500 text-sm">-20%</span>
              </p>
              <p className="text-peppermartDark60 text-[20px]">20</p>
              <p className="text-peppermartDark60 text-[20px]">5</p>
            </div>
          </div>
        </div>
      </div>




      <div className="w-[500px] sm:w-[550px] h-[124px] mb-2 mx-12 md:mx-0 md:mr-3 px-2 bg-white rounded-xl drop-shadow-md">
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-[12px] px-[10px]">
            <HiOutlineShoppingBag className="text-[20px]" />
            <div className="flex justify-between items-center">
              <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                This week
              </span>
              <BsChevronDown className="cursor-pointer" />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="text-peppermartDark30 text-[14px]">New Vendors</p>
              <p className="text-peppermartDark30 text-[14px]">Puchasing</p>
              <p className="text-peppermartDark30 text-[14px]">Abandoned Carts</p>
            </div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="flex items-center text-peppermartDark60 text-[20px]">
                <span>30</span>
                <span className="text-red-500 text-sm">-20%</span>
              </p>
              <p className="text-peppermartDark60 text-[20px]">20</p>
              <p className="text-peppermartDark60 text-[20px]">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCol3X1;
