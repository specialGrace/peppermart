import React, { useState } from "react";
import { BsListTask } from "react-icons/bs";
import { MdGridView } from "react-icons/md";
import { FaPlus, FaSearch, FaRegTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Coupons = () => {
  return (
    <div className="w-full min-h-screen">
      {/* top bar */}
      <div className="w-full max-h-fit bg-white">
        <div className="w-full md:w-11/12 mx-auto flex flex-col lg:flex-row justify-between">
          {/* left */}
          <div className="max-h-fit flex flex-col sm:flex-row">
            {/* grid view and list */}
            <div className=" max-h-fit flex items-center">
              <div className="flex items-center m-3 border border-1 border-slate-200">
                <div className=" p-3 flex justify-center items-center bg-white border border-r-1">
                  <MdGridView />
                </div>
                <div className=" p-3 flex justify-center items-center bg-slate-100">
                  <BsListTask />
                </div>
              </div>
              <div className="max-w-fit flex items-center border border-1 border-slate-200">
                <select name="filter" id="filter" className="px-3 py-3">
                  <option value="">filter</option>
                  <option value="name">name</option>
                  <option value="price">price</option>
                </select>
              </div>
            </div>
            {/* search */}
            <div className="flex items-center justify-between bg-white border border-1 border-slate-200 m-3">
              <input
                type="text"
                placeholder="search"
                className="basis-full p-2 focus: outline-0"
              />
              <FaSearch className="w-[40px] text-slate-200 cursor-pointer" />
            </div>
          </div>

          {/* right */}
          <div className="flex ">
            <div className=" flex items-center p-3 m-3 bg-peppermartDark500 cursor-pointer hover:opacity-60">
              <FaPlus className="text-white mr-3" />
              <p className="text-white">New Coupon</p>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="w-full max-h-fit drop-shadow-md bg-white rounded-xl my-6 p-3">
        <p className="text-[24px] text-peppermartDark80">Coupons</p>

        <div className="overflow-auto my-6">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="py-3 tracking-wide md:text-left whitespace-nowrap">
                  Qty
                </th>
                <th className="py-3 tracking-wide md:text-left whitespace-nowrap">
                  Name
                </th>
                <th className="py-3 tracking-wide md:text-left whitespace-nowrap">
                  Description
                </th>
                <th className="py-3 tracking-wide md:text-left whitespace-nowrap">
                  Issue Count
                </th>
                <th className="py-3 tracking-wide md:text-left whitespace-nowrap">
                  Redeem Count
                </th>
                <th className="py-3 tracking-wide md:text-left whitespace-nowrap">
                  Status
                </th>
                <th className="py-3 tracking-wide md:text-left whitespace-nowrap">
                  Action
                </th>

                <th className="py-3 tracking-wide md:text-left whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  20% Off
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  We sell content creation books and deliver to ...
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  active
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <div className="max-w-fit flex items-center rounded-lg">
                    <GrEdit className="cursor-pointer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* footer */}
        <div className="flex justify-center items-center">
          <div className="min-w-[250px] flex items-center justify-center  ">
            <div className="flex items-center border border-1 border-slate-200  p-3 cursor-pointer hover:opacity-60">
              <AiOutlineDoubleLeft className="mr-3 text-peppermartDark60" />
              <span className="text-peppermartDark60">Prev</span>
            </div>
            <div className="flex items-center bg-peppermartDark500 p-3 cursor-pointer hover:opacity-60">
              <span className="mr-3 text-white">Next</span>
              <AiOutlineDoubleRight className=" text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
