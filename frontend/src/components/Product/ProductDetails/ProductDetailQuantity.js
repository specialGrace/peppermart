import React from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'

function Quantity() {
  return (
    <div className="flex justify-between md:mb-0 mb-2 items-center border-2 rounded md:mr-1">
      <button className="px-2">
        <MdRemove size="20px" />
      </button>
      <span className="">
        <input
          value="1"
          type="number"
          className="w-20 border-l font-bold text-lg text-center focus:outline-none"
        />
      </span>
      <button className="bg-PeppermartBtnPrimary p-2 rounded-r cursor-pointer">
        <MdAdd color="white" />
      </button>
    </div>
  )
}

export default Quantity
