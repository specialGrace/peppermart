import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import storecamera from '../../../assets/images/storecamera.png'
import storecameracover from '../../../assets/images/storecameracover.png'

function CreateVendor() {
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-screen bg-peppermartDarkWhite120 rounded-md p-10 '>
        <form className=''>
          <div className='mt-5 flex justify-start  flex-wrap'>
            <div className='flex flex-col justify-start items-start'>
              <label className='text-[18px] font-bold text-center text-peppermartDark500'>
                Store Name (Required)
              </label>
              <input type='text' placeholder='Give the store a name' className='"bg-white border rounded text-[15px] font-medium leading-none text-gray-800  h-[48px] md:w-[368px] sm:w-[368px] w-full pl-3 mt-2 mb-6' />
              <label className='text-[18px] font-bold text-center text-peppermartDark500 mt-1'>
                Brief Description
              </label>
              <input type='text' placeholder='Tell us more about your store     (max. 150 words)' className='"bg-white border rounded text-[15px] font-medium leading-none text-gray-800  h-[85px] md:w-[368px] sm:w-[368px] w-full pl-3 mt-2 mb-6' />
            </div>
            <div className='flex flex-col justify-start items-start md:mt-[90px] md:ml-10'>
              <p className='text-[18px] font-bold  text-peppermartDark500'>Store Logo</p>
              <div className='flex justify-between'>
                <div className='relative'>
                  <div>
                    <div className='relative'>
                      <Image src={storecameracover} alt="storecamcover" width={128} height={96} />
                    </div>
                    <div className='absolute top-[20%] right-[28%]'>
                      <Image src={storecamera} alt="storecam" width={56} height={44} />
                    </div>

                  </div>
                </div>

                <div className='ml-10'>
                  <p className='text-[10px] text-peppermartDarkStore'>Logo size should not be more than 1mb</p>
                  <button className=" bg-peppermartDarkWhite120 focus:ring-2 focus:ring-offset-2 focus:peppermartDarkWhite120 text-sm font-semibold leading-none text-peppermartDark500 focus:outline-peppermartDark500  border rounded hover:bg-peppermartDark500 hover:text-peppermartDarkWhite120 py-4 w-[128px]  my-4">Upload Logo</button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-start  flex-wrap'>
            <div className='flex flex-col justify-start items-start mr-10'>
              <label className='text-[18px] font-bold text-center text-peppermartDark500'>
                Vendor's Name
              </label>
              <input type='text' placeholder='Enter Vendor name' className='"bg-white border rounded text-l font-medium leading-none text-gray-800 py-3 md:w-[368px] sm:w-[368px] w-full pl-3 mt-2 mb-6' />
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
          <Link href="/vendor/vendor/vendors">
            <button className=" focus:ring-2 focus:ring-offset-2 focus:peppermartDark500 text-l font-semibold leading-none text-white focus:outline-none bg-peppermartDark500 border rounded hover:bg-peppermartDark500 py-4 w-[203px] my-4">Create Vendor</button>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default CreateVendor