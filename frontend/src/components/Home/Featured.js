import React from 'react'
import Styles from './Featured.module.css'

const products = [
  {
    id: 1,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },

  {
    id: 2,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },

  {
    id: 3,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },

  {
    id: 4,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 5,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 6,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 7,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 8,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 9,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 10,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 11,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
  {
    id: 12,
    name: 'Television HDR Smart',
    price: 'NGN 50, 000',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
  },
]

const categories = [
  { id: 1, name: 'Featured Products' },
  { id: 2, name: 'Best Selling Products' },
  { id: 3, name: 'Latest Products' },
  { id: 4, name: 'Top Rated Products' },
]

function Featured() {
  return (
    <section className=" px-10 py-20">
      <div>
        <div className="flex justify-around items-center">
          {categories.map((category) => (
            <h2
              key={category.id}
              className="md:text-2xl text-sm text-center font-bold hover:text-peppermartOrange cursor-pointer"
            >
              {category.name}
            </h2>
          ))}
        </div>

        {/* RENDERING THE INDIVIDUAL PRODUCTS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-col-3  lg:grid-cols-4 gap-10 ">
          {products.map((product) => (
            <div
              key={product.id}
              className={`${Styles.featured} flex p-10 border`}
            >
              <div className="min-w-[70px]">
                <img src={product.imageSrc} width="100px" height="70px" />
              </div>

              <div className="pl-3">
                <h3 className="font-bold text-center hover:text-peppermartOrange cursor-pointer">
                  {product.name}
                </h3>
                <p className="text-md mt-3 ">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
