import React from 'react'
import tshirt from '../../../assets/images/blue-shirt.png'
import Image from 'next/image'

const ShirtCard = () => {
    console.log(tshirt)
  return (
    <div className='flex justify-center items-center border-2 rounded-sm w-52 h-32'>
      <Image src={tshirt} alt="" className='bg-white h-32 w-52'></Image>{""}
    </div>
  )
}

export default ShirtCard
