import React from 'react'
import {IoMdFunnel} from "react-icons/io"
import phone from '../../../assets/images/phone.png'
import Image from 'next/image'
import {FaChevronDown} from 'react-icons/fa'

const InventoryTable = () => {
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
{
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
}
,
{
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
}
,
{
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
}
,
{
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
}
,
{
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
}
,
{
    image:phone,
    gadget:"iphone13",
    category:"Gadget",
    price:"730,000.00",
    date:"12/11/22",
    instock:"8",
    discount:"0.00",
    totalValue:"450",
    action:"pending",
    status:"published"},
{
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
{
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
}]
  return (
    <div className='bg-white rounded shadow w-full'>
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
               <div className='flex items-center'> <h4 className='mr-1 text-xsm'>Product Name</h4>
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="flex text-sm font-medium text-gray-900 px-10 py-4 ">
              <div className='flex items-center'> <h4 className='mr-1'>Category</h4> 
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>Unit Price</h4> 
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>In-Stock</h4> 
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
                <h4 className='mr-1 tracking-normal md:text-sm object-contain'>Total Value</h4>
                <IoMdFunnel/></div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              <div className='flex items-center'>
              <h4 className='mr-3'>
              Action
              </h4>
              <IoMdFunnel/>
              </div>
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'>
               <h4 className='mr-3'>
               Status
               </h4>
                <IoMdFunnel/>
               </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {data.map((item ,index)=>( <tr  key={index}>
            <td scope="col" className=" text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <input type="checkbox"/>
              </td>
              <td scope="col" className=" text-sm font-medium text-gray-900 px-10 py-4 text-left">
               <div className='flex items-center'><Image src={item.image} width={40} height={40} alt="phone"/> <h4 className='mr-1 text-xsm'>{item.gadget}</h4>
               </div>
              </td>
              <td scope="col" className="flex text-sm font-medium text-gray-900 px-10 py-4 ">
              <div className='flex items-center'> <h4 className='mr-1'>{item.category}</h4> 
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>{item.price}</h4> 
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'><h4 className='mr-1'>{item.instock}</h4> 
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'>
               <h4 className='mr-3'>
               {item.discount}
               </h4>

               </div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <div className='flex items-center'>
                <h4 className='mr-1 tracking-normal md:text-sm object-contain'>{item.totalValue}</h4>
</div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              <div className='flex items-center'>
              <button className='flex items-center shadow rounded bg-green-200 px-2'>
              <h4 className='mr-3 '>
              {item.action}
              </h4>
              <FaChevronDown size={12}/>
              </button>
              </div>
              </td>
              <td scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               <div className='flex items-center'>
               <button className='shadow rounded bg-red-200  px-2'>
               <h4 className='mr-3'>
               {item.status}
               </h4>
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

export default InventoryTable
