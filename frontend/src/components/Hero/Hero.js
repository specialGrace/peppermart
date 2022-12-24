import React from 'react'
import ShoeImage from '../../assets/images/Shoes.png'
import Styles from './Hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    <div className="bg-peppermartYellow120">
      <div className="relative h-[200px] flex flex-1 shadow bg-white ">
        <div className="p-5">
          <h2 className="text-4xl font-extrabold">
            Nedum & Sons is <br /> on PepperMart
          </h2>
          <button className="text-xl text-white py-3 my-5 px-10 rounded font-bold bg-PeppermartBtnPrimary">
            Shop Now
          </button>
        </div>
        <div className="absolute right-0">
          <Image src={ShoeImage} />
        </div>
      </div>

      {/* Second Hero Section Starts Here  */}
      <div
        className={`relative h-[200px] flex flex-1 justify-end shadow mt-2 ${Styles.secContainer}`}
      >
        <div className="p-5 mt-10">
          <h2 className="text-4xl font-extrabold">On Sale</h2>
          <button className="text-xl text-white py-3 my-5 px-10 rounded font-bold bg-PeppermartBtnPrimary">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
