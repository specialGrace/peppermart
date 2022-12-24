import React from 'react'
import Link from 'next/link'

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
]
function SideProduct() {
  return (
    <div className="block">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-center items-center mt-12"
        >
          <div>
            <img src={product.imageSrc} width="100px" height="70px" />
          </div>

          <div className="pl-3">
            <Link href="/productdetails">
              <h3 className="font-bold cursor-pointer hover:text-peppermartOrange">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm mt-3 ">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideProduct
