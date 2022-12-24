import React, { useState } from "react";
import { FaPlus, FaSearch, FaPaperPlane } from "react-icons/fa";
import { BsChevronDown, BsFunnel, BsFilterSquare } from "react-icons/bs";
import { CgSortAz } from "react-icons/cg";
import CardCol3X1 from "../../../Cards/CardCol_3_X_1/CardCol_3_X_1";
import ModalVariant_1 from "../../../Modal/ModalVariant_1";
import CreateOrder from "../CreateOrder/CreateOrder";

const Orders = () => {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div>
      {openModal && (
        <ModalVariant_1 bgColor="rgba(0,0,0,0.65)">
          <CreateOrder modalHandler={modalHandler} />
        </ModalVariant_1>
      )}
      <section className="w-full">
        <div className="w-full flex flex-col md:flex-row justify-between mx-6 md:mx-0">
          {/* new order  */}
          <p className="font-Inter text-peppermartDark300 text-lg">
            Order Summary
          </p>
          <button
            className="flex justify-center items-center w-[250px] py-[15px] px-[14px] bg-peppermartDark500 text-white"
            onClick={modalHandler}
          >
            <FaPlus className="text-white mr-3" />{" "}
            <span className="text-white font-Inter">Create a new Order</span>
          </button>
        </div>

        {/* summaries */}
        <CardCol3X1 />

        <div className="w-full h-auto bg-white drop-shadow-md rounded-xl p-5 mx-6 md:mx-0">
          {/* header table */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-Inter mb-6 md:mb-0 text-peppermartDark300 text-lg">
              Completed Orders
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
                      <span>Customer Name</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Order Date</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Order Type</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Tracking Id</span> <CgSortAz />{" "}
                    </div>
                  </th>
                  <th className="py-6 tracking-wide text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span>Order Total</span> <CgSortAz />{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-orange-100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">Completed</span>{" "}
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-orange-100 p-2 rounded-lg">
                      <span className="mr-1">Pending</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-orange-100 p-2 rounded-lg">
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
                    Janet Adebayo
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    12 Aug 2022 - 12:25 am
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Home Delivery
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    9348fjr73
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦25,000.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-peppermartSql p-2 rounded-lg">
                      <span className="mr-1">In-Progress</span>{" "}
                      <BsChevronDown className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="w-[100px] flex items-center bg-green-100 p-2 rounded-lg">
                      <span className="mr-1">In-Progress</span>{" "}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
