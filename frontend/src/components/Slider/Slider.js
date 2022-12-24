import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FiEdit, FiSend } from 'react-icons/fi'
import Link from 'next/link'

function Slider() {
  return (
    <section>
      <Carousel
        showArrows={true}
        autoPlay={true}
        thumbWidth="0px"
        showThumbs={false}
        infiniteLoop={true}
        interval="5000"
        showStatus={false}
      >
        <div className="relative">
          <img src="https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667396675/shop-hero-3-product-slide-2_2_npojej.jpg" />
          <div
            className={` top-0 absolute flex text-white flex-col w-full min-h-full flex-1 justify-center items-center`}
          >
            <h1 className="md:text-5xl text-xl font-bold">
              CREATE YOUR WISHLIST
            </h1>
            <p className="md:my-5 md:text-xl">
              For all occasions - Weddings, birthdays, baby showers
            </p>

            <div className="flex justify-center items-center">
              <FiEdit />
              <p className="text-xl md:ml-5">Create a list</p>
            </div>
            <div className="flex justify-center items-center">
              <FiSend />
              <p className="md:my-5 text-xl ml-5">Send to family and friends</p>
            </div>

            <div>
              <button className="text-xl py-2 md:py-4 px-10 rounded font-bold bg-PeppermartBtnPrimary">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667821886/7xm_5_unfr5g.png" />
          <div className="flex absolute top-2 ml-10 md:top-10 flex-col">
            <h2 className="flex text-xl  lg:text-4xl text-start font-extrabold">
              SHOP THE BEST <br /> DEALS ON <br /> PEPPER MART
            </h2>

            <div className=" mt-10 flex flex-start">
              <Link href="/">
                <button
                  type="submit"
                  className="w-full text-xl bg-peppermartDark500 border border-transparent shadow-sm py-2 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  )
}

export default Slider
