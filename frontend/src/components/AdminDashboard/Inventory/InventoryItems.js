import React from 'react'
import {BsFunnel} from "react-icons/bs"
import {FaRegCalendarAlt,FaTelegramPlane,FaChevronDown} from 'react-icons/fa'
import InventoryTable from './InventoryTable'
const InventoryItems = () => {
  return (
    <div className='mt-4'>
      <div className='flex justify-between items-center'>
        <div><h3>Inventory Items</h3></div>
        <div className='flex justify-center items-center'>
<input type="search" id="default-search" className="block pl-5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
<button className='flex justify-center items-center rounded shadow border-2 mr-1 bg-white'><BsFunnel/><h3 className='ml-4 text-xs bg-white'>filter</h3></button>
<button className='flex justify-center items-center rounded shadow border-2 mr-1 bg-white'><FaRegCalendarAlt/><h3 className='ml-4 text-xs bg-white'>filter</h3></button>
<button className='flex justify-center items-center rounded shadow border-2 mr-1 bg-white'><FaTelegramPlane/><h3 className='ml-4 text-xs bg-white'>Export</h3></button>
<button className='flex justify-center items-center rounded shadow border-2 mr-1 bg-white text-left'><h3 className='ml-4 text-xs bg-white'>Bulk Action</h3><FaChevronDown size={12}/></button>
        </div>
      </div>
      <InventoryTable/>
    </div>
  )
}

export default InventoryItems
