import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import LaptopImage from '../../assets/images/Rectangle 726 (2).png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'

function TopSellingItemsSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextSlideIcon />,
    prevArrow: <PrevSlideIcon />,
  }
  return (
    <div className=" max-h-[239px] w-full shadow bg-[#FFDCCC]">
      <Slider {...settings}>
        <div>
          <div className="flex justify-around itms-center flex-1 ">
            <div className="py-10">
              <h2 className="md:text-5xl font-extrabold">
                G9 Laptops <br /> with Ultra 4K <br />
                <span className="md:text-3xl">and fastest Core i7</span>
              </h2>
            </div>

            <div>
              <Image src={LaptopImage} />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-around itms-center flex-1 ">
            <div className="py-10">
              <h2 className="md:text-5xl font-extrabold">
                G9 Laptops <br /> with Ultra 4K <br />
                <span className="md:text-3xl">and fastest Core i7</span>
              </h2>
            </div>

            <div>
              <Image src={LaptopImage} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

function NextSlideIcon(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        right: '20px',
        top: '40%',
      }}
      onClick={onClick}
    >
      <div className="px-6 py-2 flex justify-start items-start relative">
        <div className="text-center bg-white absolute rounded-l-3xl">
          <GrFormPrevious size="30px" color="white" />
        </div>
      </div>
    </div>
  )
}

function PrevSlideIcon(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        right: '20px',
        top: '40%',
      }}
      onClick={onClick}
    >
      <div className="px-6 py-2 flex justify-start items-start relative">
        <GrFormPrevious
          size="30px"
          color="black"
          className="text-center bg-white absolute right-[1px] rounded-r-3xl"
        />
      </div>
    </div>
  )
}

export default TopSellingItemsSlider
