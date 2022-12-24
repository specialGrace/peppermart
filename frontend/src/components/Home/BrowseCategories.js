import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NextSlideArrow from '../Arrows/NextSlideArrow'
import PrevSlideArrow from '../Arrows/PrevSLideArrow'

const categories = [
  {
    id: 1,
    name: 'Electronics',
    link: '#',
    image:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667218609/Ellipse_41_yuven9.png',
    imageAlt: 'Electronics Category',
    products: '200 Products',
  },
  {
    id: 2,
    name: 'Health and Beauty',
    link: '#',
    image:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667218609/Ellipse_41_yuven9.png',
    imageAlt: 'Electronics Category',
    products: ' 200 Products',
  },
  {
    id: 3,
    name: 'Home & Offices',
    link: '#',
    image:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667218609/Ellipse_41_yuven9.png',
    imageAlt: 'Electronics Category',
    products: ' 200 Products',
  },
  {
    id: 4,
    name: 'Gaming',
    link: '#',
    image:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667218609/Ellipse_41_yuven9.png',
    imageAlt: 'Electronics Category',
    products: ' 200 Products',
  },
  {
    id: 5,
    name: 'Baby Products',
    link: '#',
    image:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667218609/Ellipse_41_yuven9.png',
    imageAlt: 'Electronics Category',
    products: '200 Products',
  },
  {
    id: 6,
    name: 'Baby Products',
    link: '#',
    image:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667218609/Ellipse_41_yuven9.png',
    imageAlt: 'Electronics Category',
    products: '200 Products',
  },
  {
    id: 7,
    name: 'Baby Products',
    link: '#',
    image:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667218609/Ellipse_41_yuven9.png',
    imageAlt: 'Electronics Category',
    products: '200 Products',
  },
]

function BrowseCategories() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextSlideArrow />,
    prevArrow: <PrevSlideArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="px-10 bg-white md:py-0 py-10">
      <div>
        <div className="flex items-center justify-between p-10">
          <h3 className=" text-md md:text-2xl font-bold">Browser Categories</h3>
          <ul className="flex font-bold text-md md:text-md">
            <li className="text-peppermartOrange mx-5 flex items-center cursor-pointer">
              View All
              <span className="pl-3">
                <BsArrowRight size="20px" />
              </span>
            </li>
          </ul>
        </div>

        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex justify-center items-center relative h-[204px] w-[205px] rounded-full border-t-8 border-[#ffdccc]">
                <img
                  className=""
                  src={category.image}
                  alt="Electronics Category"
                />
                <div className="absolute bottom-0 text-center">
                  <Link href="/">
                    <h3 className="text-xl font-bold text-center hover:text-peppermartOrange cursor-pointer">
                      {category.name}
                    </h3>
                  </Link>
                  <p className="font-bold">{category.products}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default BrowseCategories
