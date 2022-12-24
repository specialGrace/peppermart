import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Product from '../Product/EachProduct/Product'
import ProductSlider from '../Slider/ProductSlider'

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
]

function Recommended() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-10 flex-nowrap min-w-full">
      <div className="w-full">
        <div className="flex items-center mb-10 justify-between">
          <h3 className="text-md md:text-2xl lg:3xl font-bold">
            Recommended For You
          </h3>
          <div>
            <ul className="flex font-bold text-md md:text-md">
              <li className="text-peppermartOrange mx-5 flex items-center cursor-pointerr">
                View All
                <span className="pl-3">
                  <BsArrowRight size="20px" />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <ProductSlider>
          {products.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.imageSrc}
            />
          ))}
        </ProductSlider>
      </div>
    </section>
  )
}

export default Recommended
