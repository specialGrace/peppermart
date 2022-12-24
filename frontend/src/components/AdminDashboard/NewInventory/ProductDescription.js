import React from 'react'
import {AiOutlineBold,AiOutlineUnderline,AiOutlineItalic} from 'react-icons/ai'
import {FiAlignJustify} from 'react-icons/fi'
import {BsJustifyLeft,BsJustifyRight} from 'react-icons/bs'
import {MdOutlineLink} from 'react-icons/md'
import {BiCalendar} from 'react-icons/bi'
import {WiTime5} from 'react-icons/wi'

const ProductDescription = () => {
  return (
    <div >
       <form className='bg-gray-50 border border-gray-300 text-gray-500'>
       <div className='flex items center'>
        <div className='flex items center'>
        <div className="">
            <select className="bg-gray-50 border border-gray-300 text-gray-500 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option className='text-xs'>Roboto</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="">
            <select className="bg-gray-50 border border-gray-300 text-gray-500 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option className='text-xs'>Paragraph</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <div className='gap-1'>
            <button><AiOutlineBold/></button>
            <button><AiOutlineUnderline/></button>
            <button><AiOutlineItalic/></button>
            <button><FiAlignJustify/></button>
            <button><BsJustifyLeft/></button>
            <button><BsJustifyRight/></button>
            <button><MdOutlineLink/></button>
        </div>
       </div>
      <textarea  rows="1" className="block mx-4 p-2 w-64 h-32 text-sm text-gray-900 bg-white rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 resize-none" placeholder="Production Description..."></textarea>
     
      </form>
      <p className='text-xs text-gray-500'>Add a long description for your product</p>
      <div className="flex justify-between items center mt-4 text-gray-500">
            <span className="mr-3 text-xs font-medium text-gray-500 dark:text-gray-300">
                Return Policy
              </span>
              <div  className="flex  items center">
              <span className="mr-3 text-xs font-medium text-gray-500 dark:text-gray-300">
                Add Discount
              </span>
            <label
              for="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
              </div>
            </div>
            <div  className='flex justify-between items-center mb-4 mt-4 '>
              <div className='flex justify-between items-center h-4 py-4 px-2 bg-gray-200 w-1/2 mr-2 rounded'><BiCalendar className='ml-4 text-xs'/><h4 className='mr-4 text-xs'>12/2/22</h4></div>
              <div className='flex justify-between items-center h-4 py-4 px-2 bg-gray-200 w-1/2 rounded'><WiTime5 className='ml-4 text-xs'/><h4 className='mr-4 text-xs'>05:30</h4></div>
              </div>
    </div>
  )
}

export default ProductDescription
