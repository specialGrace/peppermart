import React from "react";
import Card2_5 from "../Card2_5";
import Card1_5 from "../Card1_5";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const CardCol3X1 = () => {
  return (
    <div className="w-full flex justify-between items-center my-12 flex-wrap md:flex-nowrap">
      <Card2_5>
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-[12px] px-[10px]">
            <HiOutlineShoppingBag className="text-[20px]" />
            <div className="flex justify-between items-center">
              <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                This week
              </span>
              <BsChevronDown className="cursor-pointer" />{" "}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="text-peppermartDark30">All Orders</p>
              <p className="text-peppermartDark30">Pending</p>
              <p className="text-peppermartDark30">Completed</p>
            </div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="text-peppermartDark60 text-[20px]">450</p>
              <p className="text-peppermartDark60 text-[20px]">5</p>
              <p className="text-peppermartDark60 text-[20px]">320</p>
            </div>
          </div>
        </div>
      </Card2_5>
      <Card2_5>
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
              <p className="text-peppermartDark30">Canceled</p>
              <p className="text-peppermartDark30">Returned</p>
              <p className="text-peppermartDark30">Damaged</p>
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
      </Card2_5>
      <Card1_5>
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-[12px] px-[10px]">
            <HiOutlineShoppingCart className="text-[20px]" />
            <div className="flex justify-between items-center">
              <span className="mr-[10px] cursor-pointer text-peppermartDark10 text-[14px]">
                This week
              </span>
              <BsChevronDown className="cursor-pointer" />{" "}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="text-peppermartDark30">Abandoned Cart</p>
              <p className="text-peppermartDark30 text-red-500">Customers</p>
            </div>
            <div className="flex justify-between items-center px-[10px]">
              <p className="flex items-center text-peppermartDark60 text-[20px]">
                <span>20%</span>
                <span className="text-green-500 text-sm">+0.00%</span>
              </p>
              <p className="text-peppermartDark60 text-[20px]">30</p>
            </div>
          </div>
        </div>
      </Card1_5>
    </div>
  );
};

export default CardCol3X1;
