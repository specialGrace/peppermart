import React, { useState } from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Black Canvas Stripe Sole Trainer',
    href: '#',
    color: 'Salmon',
    size: 'XS',
    material: 'Cotton',
    price: '₦43,740',
    quantity: 1,
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 1,
    name: 'Black Canvas Stripe Sole Trainer',
    href: '#',
    color: 'Salmon',
    size: 'XS',
    material: 'Cotton',
    price: '₦43,740',
    quantity: 1,
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 1,
    name: 'Black Canvas Stripe Sole Trainer',
    href: '#',
    color: 'Salmon',
    size: 'XS',
    material: 'Cotton',
    price: '₦43,740',
    quantity: 1,
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
]

function CartModalProduct({
  id,
  image,
  title,
  name,
  material,
  size,
  color,
  quantity,
  price,
  href,
}) {
  const [qty, setQty] = useState(1)

  const addHandler = (prevQty) => {
    setQty((prevQty) => prevQty + 1)
  }

  const removeHandler = (prevQty) => {
    if (prevQty < 0) {
      return setQty(1)
    }
    setQty((prevQty) => prevQty - 1)
  }

  return (
    <div>
      <li key={id} className="flex py-6">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-sm font-medium">
              <h3>
                <Link href={href}>{name}</Link>
              </h3>
            </div>
            <p className="mt-1 text-base text-gray-500">
              {color}, {size},{material}
            </p>
            <p className="mt-2 text-base">{price}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className=" flex md:mr-3 border mt-2 ">
              <button onClick={() => removeHandler(quantity)} className="px-2">
                <MdRemove size="10px" />
              </button>

              <span className="">
                <input
                  value={qty}
                  type="number"
                  className="w-10 border-l font-bold text-lg text-center focus:outline-none"
                />
              </span>

              <button
                onClick={() => addHandler(quantity)}
                className="bg-[#E5E5E5] p-2 cursor-pointer"
              >
                <MdAdd />
              </button>
            </div>

            <div className="flex">
              <button
                type="button"
                className="font-medium cursor-pointer underline text-base hover:text-peppermartOrange"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}

export default CartModalProduct
