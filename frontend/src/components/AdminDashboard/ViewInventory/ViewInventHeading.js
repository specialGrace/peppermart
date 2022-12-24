import React from 'react'
import {FaCopy,FaChevronDown} from 'react-icons/fa'
const ViewInventHeading = () => {
  return (
    <div className='mb-4'>
      <div className="flex  items center">
            <span className="mr-3 text-xs font-medium text-gray-500 dark:text-gray-300 text-gray-500">
                Feature Product
              </span>
            <label
              for="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer text-gray-500"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            </div>
            <div>
           <div className='flex justify-between'> 
           <div className='flex justify-between items-center'>
           <h3 className='font-bold mr-1 '>Polo T-shirt</h3>
            <h3 ><span className='font-bold mr-1' >Date added:</span>12 sept 2022 12:55</h3>
            <h3 className='mr-1'><span className='font-bold mr-1 ml-2'>Product Url </span>peppermart.com/polot-shirt</h3>
            <div><FaCopy size={12}/></div>
            </div>
            <div className='flex gap-2'>
            <button className='shadow rounded bg-black text-xs text-white py-2 px-4 flex justify-between items-center mr-4'><h3 className='mr-2'>Edit Product</h3> <FaChevronDown/></button>
            <button className='mr-8 shadow rounded bg-red-500 text-xs text-white py-2 px-4 flex justify-between items-center mr-4'>Unpublish Product</button>
            </div>
            </div>
            </div>
    </div>
  )
}

export default ViewInventHeading
