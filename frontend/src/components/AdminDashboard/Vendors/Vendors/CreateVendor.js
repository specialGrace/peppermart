import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateVendor = ({ modalHandler }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="w-full flex items-center justify-center overflow">
      <div className="w-3/4 h-auto  mx-6 md:mx-0 rounded-xl drop-shadow-md bg-white p-3">
        <div className="flex items-center justify-between my-3">
          <p className="text-peppermartDark700 text-[20px]">Create New Order</p>
          <div
            className="w-[32px] h-[32px] rounded-lg flex items-center justify-center p-3 bg-peppermartYellow120 cursor-pointer"
            onClick={modalHandler}
          >
            <GrClose className="text-large" />
          </div>
        </div>

        {/* for */}
        <div className="flex flex-col mx-6 md:mx-0 md:flex-row ">
          <div className="basis-1/2 mb-6 md:mb-0 mr-[15px]">
            <div className="flex items-center justify-between">
              <p>Order Details</p>
              <div className="flex items-center justify-between">
                <p className="mr-3">New Customer</p>
                <div className="flex items-center w-[40px] h-[15px] bg-gray-300 rounded-xl">
                  <div className="w-[20px] h-[15px] bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="my-6">
              <div className="flex items-center justify-between bg-slate-50 my-3 px-3 py-2 rounded-lg">
                <select
                  name="customer"
                  id="customer"
                  className="w-full bg-inherit outline-0"
                >
                  <option value="">Select Customer</option>
                  <option value="1">John Chidi</option>
                  <option value="2">Badus Lexus</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="basis-1/2 flex items-center justify-between bg-slate-50 my-3 mr-2 px-3 py-2 rounded-lg">
                  <select
                    name="paymentType"
                    id="paymentType"
                    className="w-full bg-inherit outline-0"
                  >
                    <option value="">Payment Type</option>
                    <option value="1">John Chidi</option>
                    <option value="2">Badus Lexus</option>
                  </select>
                </div>

                <div className="basis-1/2 flex items-center justify-between bg-slate-50 my-3 px-3 py-2 rounded-lg">
                  <select
                    name="orderType"
                    id="orderType"
                    className="w-full bg-inherit outline-0"
                  >
                    <option value="">Order Type</option>
                    <option value="1">John Chidi</option>
                    <option value="2">Badus Lexus</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="orderDate" className="text-sm">
                  Order time & Date
                </label>
                <div className="flex items-center justify-between bg-slate-50 my-3 px-3 py-2 rounded-lg">
                  <FaRegCalendarAlt className="text-[20px]" />
                  <DatePicker
                    showTimeSelect
                    selected={startDate}
                    // timeClassName={handleColor}
                    dateFormat="d/MM/yy, h:mm aa"
                    timeIntervals={60}
                    className="px-6 w-full  focus:outline-0 bg-inherit border border-0"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="orderDate" className="text-sm">
                  Order Status
                </label>
                <div className="flex items-center justify-between bg-slate-50 my-3 px-3 py-2 rounded-lg">
                  <select
                    name="customer"
                    id="customer"
                    className="w-full bg-inherit outline-0"
                  >
                    <option value="">Pending</option>
                    <option value="1">Completed</option>
                    <option value="2">In progress</option>
                  </select>
                </div>
              </div>

              <div
                div
                className="flex items-center justify-between bg-slate-50 my-3 px-3 py-2 rounded-lg"
              >
                <textarea
                  name="orderNote"
                  id="orderNote"
                  cols="30"
                  rows="4"
                  placeholder="Order note"
                  className="w-full bg-inherit outline-0"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="basis-1/2 mb-6 md:mb-0  flex flex-col ">
            <p>Items</p>
            <div className="flex items-center justify-between bg-slate-50 my-3 px-3 py-2 rounded-lg">
              <FaSearch />
              <input
                type="text"
                placeholder="Search product name"
                className="w-full bg-inherit outline-0 px-3"
              />
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <div className="w-[140px] h-[140px] flex flex-col justify-center items-center bg-slate-300 rounded-full cursor-pointer">
                <FiShoppingBag className="text-[40px] " />
              </div>
              <p className="text-peppermartDark700 font-Inter my-6">
                Add Products to Your Order.
              </p>
              <p className="text-gray-400 font-Inter text-[14px]">
                Search and add products to this order.
              </p>
            </div>
          </div>
        </div>
        {/* action btns */}
        <div className="flex justify-center items-center">
          <button
            className="w-[180px] flex justify-center mr-3 my-3 p-3 items-center bg-inherit border border-peppermartDark500 hover:bg-peppermartDark500 hover:text-white rounded-sm"
            onClick={modalHandler}
          >
            Cancel
          </button>
          <Link href="/dashboard/orders/order_detail">
            <button className="w-[180px] flex justify-center mr-3 my-3 p-3 items-center bg-peppermartDark500 text-white border border-peppermartDark500 hover:opacity-60 hover:text-white rounded-sm">
              Create Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateVendor;
