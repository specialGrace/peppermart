import React from 'react'
import { MdCancel } from 'react-icons/md'
import QuantitySelect from '../Input/QuantitySelect'

const products = [
  {
    id: 1,
    name: 'Bucklo Wrap Wrop Wooden Table',
    href: '#',
    price: '₦43,740',
    color: 'Sienna',
    inStock: true,
    size: '40 x 60cm',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
    imageAlt: 'Bucklo Wrap Wrop Wooden Table',
  },
  {
    id: 2,
    name: 'Bucklo Wrap Wrop Wooden Table',
    href: '#',
    price: '₦43,740',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: '40 x 60cm',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
    imageAlt: "Front of men's Basic Tee in black.",
  },
]

function cartItem() {
  return (
    <div>
      <ul role="list" className="border-t border-b divide-y">
        {products.map((product, productIdx) => (
          <li
            key={product.id}
            className="flex justify-around items-center px-5 py-5"
          >
            <div className="flex pr-2 items-center cursor-pointer">
              <MdCancel size="25px" />
            </div>

            <div className="flex-shrink-0">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                width="100px"
                height="50px"
              />
            </div>

            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6 ">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm">
                      <a
                        href={product.href}
                        className="font-bold  hover:text-gray-800"
                      >
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <div className="mt-1 text-sm">
                    <p className="text-sm">Color: {product.color}</p>
                    {product.size ? (
                      <p className="text-sm">Dimension: {product.size}</p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 sm:pr-9">
                  <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                    Quantity, {product.name}
                  </label>

                  <div className="w-32">
                    <QuantitySelect />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mt-1text-sm font-bold text-gray-900">
                {product.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default cartItem
