import React, { useState } from 'react'
import Styles from './ProductCategory.module.css'
import { MdFavoriteBorder } from 'react-icons/md'
import ProductColors from './ProductColors'

export default function Product({ id, colors, title, image, sizes }) {
  //Managing Mouse Enter state of The Product
  const [isHovered, setIsHovered] = useState(false)

  const hoverHandler = (id) => {
    setIsHovered(true)
  }

  return (
    <div>
      <div
        onMouseOver={() => hoverHandler(id)}
        onMouseOut={() => setIsHovered(false)}
        key={id}
        className="py-3 lg:py-0 grid justify-center"
      >
        <div className="relative grid">
          <div className={`relative h-72 w-[200px] mx-2 overflow-hidden`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover "
            />
          </div>

          <div className="absolute text-sm left-3 text-white">
            <p className="px-2 py-0.5 bg-peppermartGreen200 mb-1">New</p>
            <p className="px-2 py-0.5 bg-peppermartOrange">-25%</p>
          </div>

          {/* On Hover For Product Sizes */}

          {isHovered && (
            <div className="grid grid-cols-5 gap-1 text-center text-sm absolute left-10 top- top-[19rem]">
              {sizes?.map((size, i) => (
                <p
                  key={i}
                  className="rounded-md border text-[10px] px-1 py-0.5 active:border-peppermartDark500 cursor-pointer"
                >
                  {size.name}
                </p>
              ))}
            </div>
          )}

          {/* On Hover For Add To cart and Quick View */}

          {isHovered === true && (
            <div>
              <div className=" top-20 left-[55px]  absolute flex flex-col flex-1 ">
                <button className="bg-white text-sm my-1 p-1 w-[118px] rounded">
                  Quick View
                </button>
                <button className="bg-white text-sm p-1 w-[118px] rounded">
                  Add To Cart
                </button>
              </div>
              <div className="absolute top-3 left-[170px] cursor-pointer rounded-full p-2 bg-white shadow-lg">
                <MdFavoriteBorder />
              </div>
            </div>
          )}
          <div className="block mt-12 text-sm">
            <p className="font-bold">Quilted Shoulder Bag</p>
            <p className="py-3 text-peppermartOrange">
              ₦68.00
              <span className="pl-5 line-through text-peppermartDark30">
                ₦98.00
              </span>
            </p>

            <ProductColors colors={colors} />
          </div>
        </div>
      </div>
    </div>
  )
}
