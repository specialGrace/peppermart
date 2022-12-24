import React from "react";
import ViewInventoryCards from "./ViewInventoryCards";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiChevronDown} from 'react-icons/fi'

const OrdersCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white col-span-1 rounded">
          <div className="flex justify-between p-4">
            <div class><HiOutlineShoppingBag/></div>
            <div className="flex text-gray-500">
                <h4 className="text-xs text-gray-500">All time</h4>
                <FiChevronDown/>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-xs">All Orders</h4>
              <h4>1</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-xs">Pending</h4>
              <h4>0</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-xs">completed</h4>
              <h4>1</h4>
            </div>
          </div>
        </div>
        <div className="bg-white col-span-1 rounded">
        <div className="flex justify-between p-4">
            <div class><HiOutlineShoppingBag/></div>
            <div className="flex text-gray-500">
                <h4 className="text-xs text-gray-500">All time</h4>
                <FiChevronDown/>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-xs">Cancelled</h4>
              <h4>0</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-xs">Returned</h4>
              <h4>0</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-xs">Damaged</h4>
              <h4>0</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
