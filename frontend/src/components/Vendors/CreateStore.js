import React, { useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import Image from 'next/image'
import storecamera from '../../assets/images/storecamera.png'
import storecameracover from '../../assets/images/storecameracover.png'
import Link from 'next/link'


function CreateStore({ modalHandler }) {
    return (
        <div className='w-full h-screen bg-rgba(0,0,0,0.65) flex justify-center items-center'>
            <div className='w-[499px] h-[593px] bg-peppermartDarkWhite120 relative rounded-md  '>
                <div className=' rounded-full absolute top-[2%] right-[2%] cursor-pointer' onClick={() => modalHandler()}>
                    <ImCancelCircle className='w-[35px] h-[35px]' />
                </div>
                <div className=' p-10'>
                    <p className='text-[28px] font-bold text-center text-peppermartDark500 '>Create new store</p>
                    <p className='text-[16px]  text-center text-peppermartDarkStore'>Welcome User, let's help you set up your store</p>
                    <div className='mt-5'>
                        <label className='text-[18px] font-bold text-center text-peppermartDark500'>
                            Store Name (Required)
                        </label>
                        <input type='text' placeholder='Give the store a name' className='"bg-white border rounded text-[15px] font-medium leading-none text-gray-800  h-[48px] w-full pl-3 mt-2 mb-6' />
                        <label className='text-[18px] font-bold text-center text-peppermartDark500 mt-6'>
                            Brief Description
                        </label>
                        <input type='text' placeholder='Tell us more about your store     (max. 150 words)' className='"bg-white border rounded text-[15px] font-medium leading-none text-gray-800  h-[85px] w-full pl-3 mt-2 mb-6' />
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

                            <div className=''>
                                <p className='text-[10px] text-peppermartDarkStore'>Logo size should not be more than 1mb</p>
                                <button className=" bg-peppermartDarkWhite120 focus:ring-2 focus:ring-offset-2 focus:peppermartDarkWhite120 text-sm font-semibold leading-none text-peppermartDark500 focus:outline-peppermartDark500  border rounded hover:bg-peppermartDark500 hover:text-peppermartDarkWhite120 py-4 w-1/2 my-4">Upload Logo</button>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link href="/vendor/vendor/vendordetails">
                                <button className=" bg-peppermartDark500 focus:ring-2 focus:ring-offset-2 focus:peppermartDark500 text-sm font-semibold leading-none text-white focus:outline-none bg-peppermartDark500 border rounded hover:bg-peppermartDark500 py-4 w-1/3 my-4">Submit</button>
                            </Link>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateStore