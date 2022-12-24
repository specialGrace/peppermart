import React from "react";
import Card2_5 from "../../../Cards/Card2_5";
import Card1_5 from "../../../Cards/Card1_5";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsChevronDown, BsCreditCard2Back } from "react-icons/bs";

const CustomerInfo = () => {
  return (
    <div className="w-full flex justify-between items-center my-12 flex-wrap md:flex-nowrap">
      <Card2_5>
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-[12px] px-[10px]">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] bg-peppermartYellow100 rounded-xl p-3 mr-3 flex justify-center items-center">
                <HiOutlineShoppingBag className="text-[50px]" />
              </div>

              <div>
                <p className="text-Inter text-peppermartDark30">
                  Janet Adebayo
                </p>
                <p className="text-Inter text-peppermartDark30">
                  Customer since{" "}
                  <span className="text-Inter text-peppermartDark60">
                    12 Sept 2022
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-between py-3 px-6 items-center text-peppermartDark60 text-[14px] bg-peppermartYellow100 rounded-lg">
              Pending
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark30 text-[14px]">Phone</p>
              </div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark60 text-[14px]">
                  +2348065650633
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark30">Email</p>
              </div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark60 text-[14px]">
                  janet.adebayo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card2_5>
      <Card2_5>
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-[12px] px-[10px]">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] bg-peppermartYellow100 rounded-xl p-3 mr-3 flex justify-center items-center">
                <MdOutlineLocationOn className="text-[50px]" />
              </div>

              <div>
                <p className="text-Inter text-peppermartDark30">
                  Janet Adebayo
                </p>
                <p className="text-Inter text-peppermartDark30">
                  Customer since{" "}
                  <span className="text-Inter text-peppermartDark60">
                    12 Sept 2022
                  </span>
                </p>
              </div>
            </div>

            {/* <div className="flex justify-between py-3 px-6 items-center text-peppermartDark60 text-[14px] bg-peppermartYellow100 rounded-lg">
              Pending
            </div> */}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark30 text-[14px]">
                  Home Address
                </p>
              </div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark60 text-[20px] text-[14px]">
                  No. 15 Adekunle Street, Yaba, Lagos State
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark30 text-[14px]">
                  Billing Address
                </p>
              </div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark60 text-[20px] text-[14px]">
                  No. 15 Adekunle Street, Yaba, Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card2_5>
      <Card1_5>
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-[12px] px-[10px]">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] bg-peppermartYellow100 rounded-xl p-3 mr-3 flex justify-center items-center">
                <BsCreditCard2Back className="text-[50px]" />
              </div>
            </div>

            {/* <div className="flex justify-between py-3 px-6 items-center text-peppermartDark60 text-[14px] bg-peppermartYellow100 rounded-lg">
              Pending
            </div> */}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark30 text-[14px]">
                  Payment Method
                </p>
              </div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark60 text-[20px] text-[14px]">
                  Master Card
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark30 text-[14px]">Order Type</p>
              </div>
              <div className="flex justify-between items-center px-[10px]">
                <p className="text-peppermartDark60 text-[20px] text-[14px]">
                  Home Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card1_5>
    </div>
  );
};

export default CustomerInfo;
