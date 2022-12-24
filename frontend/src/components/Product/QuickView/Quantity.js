import React from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'

function Quantity() {
  return (
    <div className="flex justify-between items-center border-2 rounded md:mr-1">
      <button className="px-2">
        <MdRemove size="20px" />
      </button>

      <span className="">
        <input
          value="1"
          type="number"
          className="w-32 border-l font-bold text-lg text-center focus:outline-none"
        />
      </span>

      <button className="bg-PeppermartBtnPrimary py-4 px-4 rounded-r cursor-pointer">
        <MdAdd color="white" />
      </button>
    </div>
  )
}

export default Quantity
