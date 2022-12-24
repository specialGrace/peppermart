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

function WishlistItems() {
  return (
    <div>
      <ul>
        {products.map((product, productIdx) => (
          <li
            key={product.id}
            className="flex justify-between flex-col lg:flex-row items-center px-3 md:px-10 py-2 sm:py-10 border-b"
          >
            <div className="flex justify-center items-center cursor-pointer">
              <MdCancel size="30px" />

              <div className="flex-shrink-0">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width="100px"
                  height="50px"
                />
              </div>

              <div className="ml-1 flex-1 flex flex-col justify-between sm:ml-2 ">
                <div className="relative">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm">
                        <a href={product.href} className="font-bold">
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
                    <label
                      htmlFor={`quantity-${productIdx}`}
                      className="sr-only"
                    >
                      Quantity, {product.name}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold ">{product.price}</p>
            </div>
            <div className="lg:my:0 my-2">
              <p
                className={`mt-1 text-sm font-bold ${
                  product.inStock ? 'text-[green]' : 'text-[red]'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>

            <div className="lg:w-32 w-full">
              <QuantitySelect />
            </div>

            <button className="lg:w-auto w-full border rounded-lg border-peppermartDark500 lg:py-0 my-2">
              <p className="p-2 text-sm ">View Product</p>
            </button>

            <button className="lg:w-auto w-full rounded-lg text-white lg:py-0 my-2 bg-PeppermartBtnPrimary ">
              <p className="p-2 text-sm font-bold">Add to Cart</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WishlistItems
