import React from 'react'
import { FiUsers } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const MarketingCard = () => {
  return (
    <div className="flex justify-evenly h-52 ">
      <div className="block px-4 rounded-lg shadow-lg bg-white ">
        <div className="flex justify-center items-center">
          <FiUsers />
          <div className="flex justify-center items-center ml-auto mb-3">
            <h2 className="mx-2">This week</h2>
            <FaChevronDown />
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="mx-3">
            <h4 className="text-zinc-200">sales</h4>
            <h4 className="text-zinc-600 font-bold">#4,000,000.00</h4>
          </div>
          <div className="mx-3">
            <h4 className="text-zinc-200">Volume</h4>
            <h4 className="text-zinc-600 font-bold">450</h4>
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="text-zinc-200"></h4>
            <h4 className="text-zinc-600 font-bold text-xs text-green-300">+20%</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingCard
