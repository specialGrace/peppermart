import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Product from '../Product/EachProduct/Product'
import ProductSlider from '../Slider/ProductSlider'
import Styles from './TopVendor.module.css'

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
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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

function TopVendor() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mt-20 p-10 flex-nowrap min-w-full">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-md md:text-2xl lg:3xl font-bold">Top Vendors</h3>
          <div>
            <ul className="flex font-bold text-md md:text-md">
              {Categories.map((category) => (
                <li
                  key={category.id}
                  className=" hidden md:block mx-5 cursor-pointer"
                >
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

        <div className={`${Styles.con} h-[236px] mt-10 w-auto`}>
          <div className="p-10 text-3xl md:text-6xl font-bold text-peppermartDark500">
            <p className=" ">Top Electronics</p>
            <p className="font-bold">For Gifts</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 min-w-full">
          <div className="text-sm mb-10 text-center md:text-xl font-bold flex">
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

          {/* RENDERING EACH TOP VENDOR PRODUCTS */}

          <ProductSlider>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.imageSrc}
              />
            ))}
          </ProductSlider>

          {/* END OF RENDERING EACH TOP VENDOR PRODUCTS */}
        </div>
      </div>
    </section>
  )
}

export default TopVendor
