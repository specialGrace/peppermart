import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Orders = () => {
  return (
    <div className="w-full min-h-fit bg-white drop-shodow-md rounded-xl p-12">
      {/* top menu */}
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-between">
          <p className="font-semibold text-peppermartDark80 text-[24px]">
            Orders
          </p>
          <div className="flex items-center">
            <FaSearch />
            <input
              className="focus:outline-0"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </div>
        </div>
      </div>

      {/* order table */}

      <div className="my-12  overflow-auto">
        <table className="w-full">
          <thead className="bg-peppermartBlue9">
            <tr>
              <th className="px-3 py-6 tracking-wide text-left whitespace-nowrap font-Urbanist">
                <div className="flex items-center">
                  <span>Order ID</span>{" "}
                </div>
              </th>
              <th className="px-3py-6 tracking-wide text-left whitespace-nowrap font-Urbanist">
                <div className="flex items-center">
                  <span className="font-Urbanist ">Number of Items</span>{" "}
                </div>
              </th>
              <th className="px-3 py-6 tracking-wide text-left whitespace-nowrap font-Urbanist">
                <div className="flex items-center">
                  <span className="font-Urbanist ">Total Amount</span>{" "}
                </div>
              </th>
              <th className="px-3 py-6 tracking-wide text-left whitespace-nowrap font-Urbanist">
                <div className="flex items-center">
                  <span className="font-Urbanist ">Shipping</span>{" "}
                </div>
              </th>
              <th className="px-3 py-6 tracking-wide text-left whitespace-nowrap font-Urbanist">
                <div className="flex items-center">
                  <span className="font-Urbanist ">Customer</span>{" "}
                </div>
              </th>
              <th className="px-3 py-6 tracking-wide text-left whitespace-nowrap font-Urbanist">
                <div className="flex items-center">
                  <span className="font-Urbanist ">Status</span>{" "}
                </div>
              </th>
              <th className="px-3 py-6 tracking-wide text-left whitespace-nowrap font-Urbanist">
                <div className="flex items-center">
                  <span className="font-Urbanist ">Action</span>{" "}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Waiting for Approval</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>

            <tr className=" bg-peppermartBlue9 hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Going to peppermart</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Delivered</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
            <tr className="bg-white bg-peppermartBlue9 hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Going to peppermart</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Delivered</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
            <tr className="bg-white bg-peppermartBlue9 hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1 ">Going to peppermart</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Delivered</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
            <tr className="bg-white bg-peppermartBlue9 hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Going to peppermart</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-200">
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                9348fjr73
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₦300
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Rosemary Dean
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                Maxime
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartSql p-2 rounded-lg">
                  <span className="mr-1">Delivered</span>{" "}
                  <BsChevronDown className="cursor-pointer" />
                </div>
              </td>
              <td className="p-3 text-sm font-Urbanist  text-peppermartDark80 whitespace-nowrap">
                <div className="max-w-fit flex items-center bg-peppermartGreen100 opacity-50 text-white p-2 rounded-lg">
                  <span className="mr-1 cursor-pointer">Acknowledge</span>{" "}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* footer pagination */}
        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center justify-between">
            <p className="mr-[20px]">Show product per page</p>
            <ul className="flex items-center justify-between">
              <li className="w-[40px] h-[29px] bg-peppermartBlue300 flex items-center justify-center text-white rounded-[8px] mr-[20px]">
                40
              </li>
              <li className="w-[40px] h-[29px] bg-peppermartBlue300 flex items-center justify-center text-white rounded-[8px] mr-[20px]">
                60
              </li>
              <li className="w-[40px] h-[29px] bg-peppermartBlue300 flex items-center justify-center text-white rounded-[8px] mr-[20px]">
                80
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <BiChevronLeft className="text-[20px] text-slate-400 cursor-pointer" />
            <ul className="flex items-center justify-between mx-3">
              <li className="w-[40px] h-[29px] flex items-center justify-center cursor-pointer mr-3 border border-b-4 border-b-peppermartBlue300">
                1
              </li>
              <li className="w-[40px] h-[29px] flex items-center justify-center cursor-pointer mr-3">
                2
              </li>
              <li className="w-[40px] h-[29px] flex items-center justify-center cursor-pointer">
                3
              </li>
            </ul>
            <BiChevronRight className="text-[20px] text-peppermartDark80 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
