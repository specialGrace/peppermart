
import React from 'react'
import { HiKey } from 'react-icons/hi'
function ResetPassword4() {
    return (
        <div className='w-full h-screen bg-peppermartDarkResetPwd flex justify-center items-center'>
            <div className='w-[590px] h-[473px] bg-peppermartDarkWhite120 relative rounded-md'>
                <div className='flex justify-center items-center w-[120px] h-[120px] bg-peppermartDarkWhite120 rounded-full absolute top-[-13%] left-[37%]'>
                    <HiKey className='w-[46px] h-[46px] text-peppermartOrange' />
                </div>
                <div className='mt-16 p-10'>
                    <p className='text-[32px] font-bold text-center text-peppermartDark500 '>Password Updated!</p>
                    <p className='text-[18px]  text-center text-peppermartDark600'>Your password has been updated.</p>
                </div>

            </div>
        </div>
    )
}

export default ResetPassword4