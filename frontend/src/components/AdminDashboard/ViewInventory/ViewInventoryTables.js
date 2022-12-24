import React from 'react'
import {IoMdFunnel} from "react-icons/io"
import phone from '../../../assets/images/phone.png'
import Image from 'next/image'
import {FaChevronDown} from 'react-icons/fa'

const ViewInventoryTable = () => {
const data=[{
    image:phone,
    gadget:"iphone13",
    category:"Gadget",
    price:"730,000.00",
    date:"12/11/22",
    instock:"8",
    discount:"0.00",
    totalValue:"450",
    action:"pending",
    status:"published"
},
// 
]
  return (
    <div className='bg-white rounded shadow w-full '>
      <div class="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th scope="col" className=" text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <input type="checkbox"/>
              </th>
              <th scope="col" className=" text-sm font-medium text-gray-900 px-10 py-4 text-left">
               <div className='flex items-center'> <h4 className='mr-1 text-xsm'>Order Date</h4>
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="flex text-sm font-medium text-gray-900 px-10 py-4 ">
              <div className='flex items-center'> <h4 className='mr-1'>Order Type</h4> 
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>Unit Price</h4> 
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>Qty</h4> 
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'>
               <h4 className='mr-3'>
               Discount
               </h4>
                <IoMdFunnel/>
               </div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <div className='flex items-center'>
                <h4 className='mr-1 tracking-normal md:text-sm object-contain'>Order Total </h4>
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <div className='flex items-center'>
                <h4 className='mr-1 tracking-normal md:text-sm object-contain'>Status </h4>
                <IoMdFunnel/></div>
              </th>
              </tr>
          </thead>
          <tbody>
          {data.map((item ,index)=>( <tr  key={index}>
            <td scope="col" className=" text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <input type="checkbox"/>
              </td>
              <td scope="col" className=" text-sm font-medium text-gray-900 px-10 py-4 text-left">
               <div className='flex items-center'><h4>12 Aug 22-12:04am</h4>
               </div>
              </td>
              <td scope="col" className="flex text-sm font-medium text-gray-900 px-10 py-4 ">
              <div className='flex items-center'> <h4 className='mr-1'>Home Delivery</h4> 
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>25,000.00</h4> 
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>2</h4> 
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'>
               <h4 className='mr-3'>
               {item.discount}
               </h4>
0.00
               </div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <div className='flex items-center'>
                <h4 className='mr-1 tracking-normal md:text-sm object-contain'>50000</h4>
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              <div className='flex items-center'>
              <button className='flex items-center shadow rounded bg-green-200 px-2'>
            completed
              </button>
              </div>
              </td>
              
            </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ViewInventoryTable
