import React from 'react'
import { HiKey } from 'react-icons/hi'
import Link from 'next/link'

function ResetPassword1() {
    return (
        <div className='w-full h-screen bg-peppermartDarkResetPwd flex justify-center items-center'>
            <div className='w-[590px] h-[473px] bg-peppermartDarkWhite120 relative rounded-md'>
                <div className='flex justify-center items-center w-[120px] h-[120px] bg-peppermartDarkWhite120 rounded-full absolute top-[-13%] left-[37%]'>
                    <HiKey className='w-[46px] h-[46px] text-peppermartOrange' />
                </div>
                <div className='mt-10 p-10'>
                    <p className='text-[32px] font-bold text-center text-peppermartDark500 '>Reset Password</p>
                    <p className='text-[18px] font-bold text-center text-peppermartDark500'>Please enter your new password</p>
                    <form className='mt-10'>
                        <label className='text-[18px] font-bold text-center text-peppermartDark500'>
                            Input Email
                        </label>
                        <input type='text' placeholder='Enter your email address' className='"bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 ' />
                        <Link href="/resetpassword/resetpassword2">
                            <button className=" focus:ring-2 focus:ring-offset-2 focus:peppermartDark500 text-sm font-semibold leading-none text-white focus:outline-none bg-peppermartDark500 border rounded hover:bg-peppermartDark500 py-4 w-full mt-4">Submit</button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ResetPassword1