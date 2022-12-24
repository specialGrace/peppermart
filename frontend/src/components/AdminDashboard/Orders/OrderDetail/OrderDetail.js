import React from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { FaPlus, FaSearch, FaPaperPlane } from "react-icons/fa";
import { BsChevronDown, BsFunnel, BsFilterSquare } from "react-icons/bs";
import { CgSortAz } from "react-icons/cg";
import CustomerInfo from "./CustomerInfo";
import productImg from "../../../../assets/images/72.png";
import Image from "next/image";

const OrderDetail = () => {
  return (
    <div className="w-full">
      <section className="w-full">
        <div className="w-full flex flex-col md:flex-row justify-between mx-6 md:mx-0">
          {/* new order  */}
          <div className="flex items-center">
            <p className="font-Inter text-peppermartDark300 text-[15px] mr-3">
              Order Number
              <span className="text-peppermartDark30 font-Inter text-[15px]">
                {" "}
                #743648
              </span>
            </p>
            <p className="font-Inter text-peppermartDark300 text-[15px] mr-3">
              Order Date
              <span className="text-peppermartDark30 font-Inter text-[15px]">
                {" "}
                12 Sept 2022 - 12:55 pm
              </span>
            </p>
            <p className=" flex items-center font-Inter text-peppermartDark300 text-[15px]">
              Tracking ID
              <span className="text-peppermartDark30 font-Inter text-[15px] mr-3">
                {" "}
                9348fjr73
              </span>
              <AiOutlineCopy className="cursor-pointer" />
            </p>
          </div>
          <div className="flex items-center">
            <select
              name="action"
              id="action"
              className="flex justify-center items-center w-[250px] hover:opacity-60 mr-0 md:mr-3 py-[15px] px-[14px] text-white bg-peppermartDark500"
            >
              <option value="complete">Mark as Complete</option>
              <option value="pending">Pending</option>
            </select>

            <button className="flex justify-center items-center w-[200px]  hover:opacity-60 py-[15px] px-[14px] bg-peppermartRed200 text-white">
              <span className="text-white font-Inter mr-3 ">Cancel</span>
            </button>
          </div>
        </div>

        {/* customer info */}
        <div className="w-full">
          <CustomerInfo />
        </div>

        {/* table */}

        <div className="w-full h-auto bg-white drop-shadow-md rounded-xl p-5 mx-6 md:mx-0">
          {/* header table */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-Inter mb-6 md:mb-0 text-peppermartDark300 text-lg">
              Items 3
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center p-3">
              <div className="flex justify-between items-center border border-peppermartDark15 p-1 mb-2 md:mb-0 mr-2 cursor-pointer">
                <FaSearch className="mr-2" />
                <input type="text" placeholder="Search" className="outline-0" />
              </div>

              <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer">
                <BsFunnel className="mr-2" />
                <p>Funnel</p>
              </div>
              <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer">
                <BsFilterSquare className="mr-2" />
                <p>Filter</p>
              </div>
              <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer">
                <FaPaperPlane className="mr-2" />
                <p>Export</p>
              </div>
              <div className="flex justify-between items-center border border-peppermartDark50 p-1 mb-2 md:mb-0 mr-2 cursor-pointer">
                <BsChevronDown className="mr-2" />
                <p>Bulk Action</p>
              </div>
            </div>
          </div>

          {/* table */}

          <div className="my-12  overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-t-2 border-gray-200">
                <tr>
                  <th className="py-4 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <div className="w-[40px] h-[40px] border border-gray-200 rounded-2xl bg-white"></div>
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Product Name</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Unit price</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Order Type</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Qty</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Discount</span> <CgSortAz />{" "}
                    </div>
                  </th>

                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Action</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Status</span> <CgSortAz />{" "}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-blue-200">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <div className="w-[40px] h-[40px] border border-gray-200 rounded-2xl bg-white"></div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="flex">
                      <div className="w-10 h-10 mr-4">
                        <Image src={productImg} alt="product" />
                      </div>
                      <span>iPhone 13 Pro</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    2
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦0.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦50,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartYellow100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartYellow100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                    </div>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-blue-200">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <div className="w-[40px] h-[40px] border border-gray-200 rounded-2xl bg-white"></div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="flex">
                      <div className="w-10 h-10 mr-4">
                        <Image src={productImg} alt="product" />
                      </div>
                      <span>iPhone 13 Pro</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    2
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦0.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦50,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartYellow100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartYellow100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                    </div>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-blue-200">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <div className="w-[40px] h-[40px] border border-gray-200 rounded-2xl bg-white"></div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="flex">
                      <div className="w-10 h-10 mr-4">
                        <Image src={productImg} alt="product" />
                      </div>
                      <span>iPhone 13 Pro</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    2
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦0.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦50,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartYellow100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartYellow100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center items-center">
              <p className="mr-12 text-[18px] text-Inter font-semibold">
                Total
              </p>{" "}
              <p className="mr-12 text-[18px] text-Inter font-semibold">
                ₦150,000.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderDetail;
