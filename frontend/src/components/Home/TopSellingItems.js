import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Product from '../Product/EachProduct/Product'
import SideProduct from '../Product/SideProduct/SideProduct'
import TopSellingItemsSlider from '../Slider/TopSellingItemsSlider'

const Categories = [
  { id: 1, name: 'Computer & Accessories', link: '#' },
  { id: 2, name: 'Phone & Tablets', link: '#' },
  { id: 3, name: 'Electronics', link: '#' },
]

const products = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },

  {
    id: 2,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },

  {
    id: 3,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },

  {
    id: 4,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
]

function TopSellingItems() {
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-10 items-center px-10 flex-nowrap min-w-full">
      <div className="w-full lg:w-3/4">
        <div className="flex items-center justify-between">
          <h3 className="text-md md:text-2xl lg:3xl font-bold">
            Top Selling Items
          </h3>
          <div>
            <ul className="flex font-bold lg:text-xl md:text-base">
              {Categories.map((category) => (
                <li className="mr-5 hidden md:block " key={category.id}>
                  {category.name}
                </li>
              ))}
              <li className="text-peppermartOrange mx-5 flex items-center">
                View All
                <span className="pl-3">
                  <BsArrowRight size="20px" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Rendering Top Selling Items Sliders */}
        <div className="mt-5">
          <TopSellingItemsSlider />
        </div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="text-sm  text-center md:text-xl font-bold flex">
            <p className="cursor-pointer hover:text-peppermartOrange">
              Best Sellers
            </p>
            <p className="mx-5 cursor-pointer hover:text-peppermartOrange">
              New Arrivals
            </p>
            <p className="cursor-pointer hover:text-peppermartOrange">
              Best Ratings
            </p>
          </div>

          {/* RENDERING THE TOP SELLING PRODUCTS */}

          <div className="mt-8 grid grid-cols-1 gap-y-5 sm:grid-cols-2  lg:grid-cols-4">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-1/4">
        <h3 className="text-3xl font-bold text-center">Special Offers</h3>
        <h3 className="text-2xl font-bold text-center">
          OFFER ENDS IN 10 DAYS
        </h3>

        {/* Rendering the Side Products  */}
        <SideProduct />
      </div>
    </section>
  )
}

export default TopSellingItems
