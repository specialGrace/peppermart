import React from 'react'
import Link from 'next/link'


function CreateCustomer() {
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-screen bg-peppermartDarkWhite120 rounded-md p-10 '>
        <form className=''>
          <div className='flex justify-start  flex-wrap'>
            <div className='flex flex-col justify-start items-start mr-10'>
              <label className='text-[18px] font-bold text-center text-peppermartDark500'>
                Customer's Name
              </label>
              <input type='text' placeholder='Enter Customer name' className='"bg-white border rounded text-l font-medium leading-none text-gray-800 py-3 md:w-[368px] sm:w-[368px] w-full pl-3 mt-2 mb-6' />
            </div>
            <div className='flex flex-col justify-start items-start'>
              <label className='text-[18px] font-bold text-center text-peppermartDark500 '>
                Email
              </label>
              <input type='text' placeholder='Enter  email address' className='"bg-white border rounded text-l font-medium leading-none text-gray-800 py-3 md:w-[368px] sm:w-[368px] w-full pl-3 mt-2 mb-6' />
            </div>
          </div>
          <div className='flex justify-start flex-wrap'>
            <div className='mr-10 flex flex-col justify-start items-start'>
              <label className='text-[18px] font-bold text-center text-peppermartDark500'>
                Phone Number
              </label>
              <input type='text' placeholder='Enter phone number' className='"bg-white border rounded text-l font-medium leading-none text-gray-800 py-3 md:w-[368px] sm:w-[368px] w-full pl-3 mt-2 mb-6' />
            </div>
            <div className='flex flex-col justify-start items-start'>
              <label className='text-[18px] font-bold text-center text-peppermartDark500 mt'>
                Enter Home Address
              </label>
              <input type='text' placeholder='Enter home address' className='"bg-white border rounded text-l font-medium leading-none text-gray-800 py-3 md:w-[368px] sm:w-[368px] w-full pl-3 mt-2 mb-6' />
            </div>
          </div>

          <div className='flex justify-start flex-wrap'>
            <div className='mr-10 cursor-pointer'>
              <input type='radio' className='cursor-pointer bg-red-600' name='customer' /> <span>Active</span>
            </div>
            <div className='cusor-pointer'>
              <input type='radio' className='cursor-pointer bg-red-600' name='customer' /> <span>Inactive</span>
            </div>
          </div>
          <Link href="/customer/customers">
            <button className=" focus:ring-2 focus:ring-offset-2 focus:peppermartDark500 text-l font-semibold leading-none text-white focus:outline-none bg-peppermartDark500 border rounded hover:bg-peppermartDark500 py-4 w-[203px] my-4">Create Customer</button>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default CreateCustomer