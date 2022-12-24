import React from 'react'
import ViewInventoryTable from './ViewInventoryTables'
import {BsFunnel} from "react-icons/bs"
import {FaRegCalendarAlt,FaTelegramPlane,FaChevronDown} from 'react-icons/fa'
import {FiSearch} from "react-icons/fi"
const ViewInventoryItems = () => {
  return (
    <div>
    <div className='flex justify-between items-center bg-white mt-6'>
        <div><h3>Purchases</h3></div>
        <div className='flex justify-center items-center'>
<div className='relative bg-white'>
<FiSearch size={40} className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"/>
<input type="search" id="default-search" className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required/></div>
<button className='flex justify-center py-1 items-center rounded shadow border-2 mr-1 bg-white'><BsFunnel/><h3 className='ml-4 text-xs bg-white'>filter</h3></button>
<button className='flex justify-center py-1 items-center rounded shadow border-2 mr-1 bg-white'><FaRegCalendarAlt/><h3 className='ml-4 text-xs bg-white'>filter</h3></button>
<button className='flex justify-center py-1 items-center rounded shadow border-2 mr-1 bg-white'><FaTelegramPlane/><h3 className='ml-4 text-xs bg-white'>Export</h3></button>
<button className='flex justify-center py-1 items-center rounded shadow border-2 mr-1 bg-white text-left'><h3 className='ml-4 text-xs bg-white w-auto'>Bulk Action</h3><FaChevronDown size={12}/></button>
        </div>
      </div>  
      <ViewInventoryTable/>
    </div>
  )
}

export default ViewInventoryItems
