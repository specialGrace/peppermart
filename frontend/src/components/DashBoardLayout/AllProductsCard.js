import React from "react";
import { FiUsers } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const AllProductsCard = () => {
  return (
    <div className="flex justify-evenly h-32 relative w-52">
      <div className="block px-4 rounded-lg shadow-lg bg-#1F2B5B-900 "style={{backgroundColor:"#1F2B5B"}} >
        <div className="flex justify-center items-center">
          <FiUsers />
          <div className="flex justify-center items-center ml-auto mb-3">
           
          </div>
        </div>
        <div className="flex justify-evenly mt-14 ">
          <div className="mx-3">
            <h4 className="text-zinc-200 text-xs font-bold">All Products</h4>
            <h4 className="text-zinc-600 font-bold">32 <span>+20%</span></h4>
          </div>
          <div className="mx-3">
            <h4 className="text-zinc-200 text-xs font-bold">Active</h4>
            <h4 className="text-zinc-600 font-bold">450</h4>
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="text-zinc-200"></h4>
            <h4 className="text-zinc-600 font-bold text-xs text-green-300">+20%</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
