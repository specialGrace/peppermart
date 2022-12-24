import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel, MdAdd, MdRemove } from 'react-icons/md'
import Link from 'next/link'
import Reviews from './Reviews'
import ProductSize from './ProductSize'
import ProductColor from './ProductColors'
import Quantity from './Quantity'

const product = {
  name: 'Quilted Shoulder Bag ',
  price: '43,740',
  discountedPrice: '73,740',
  rating: 3.9,
  reviewCount: 10,
  href: '#',
  imageSrc:
    'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    { name: 'Black', class: '#955C50', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuickView() {
  const [open, setOpen] = useState(true)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div
            className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
            style={{ fontSize: 0 }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="hidden fixed inset-0 bg-transparent bg-opacity-75 transition-opacity md:block" />
            </Transition.Child>

            <span
              className="hidden md:inline-block md:align-middle md:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <div className="flex z-[1000] text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <MdCancel className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="object-center object-cover"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="md:text-4xl text-2xl  font-extrabold text-gray-900 sm:pr-12">
                        {product.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        {/* Reviews */}
                        <Reviews
                          rating={product.rating}
                          reviewCount={product.reviewCount}
                        />

                        <div className="text-sm md:text-2xl mt-5">
                          <span className="text-peppermartOrange">
                            ₦{product.price}
                          </span>
                          <sup>
                            <del className="ml-3 text-sm text-slate-300">
                              ₦{product.discountedPrice}
                            </del>
                          </sup>
                        </div>

                        <div>
                          <p className="text-sm md:text-xl pt-4">
                            Two Cargo Pockets with snap button closure. The
                            model is 185cm tall and is wearing a size 40
                          </p>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/*Product Sizes */}
                          <ProductSize
                            sizes={product.sizes}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                          />

                          {/* Product Colors*/}

                          <ProductColor
                            colors={product.colors}
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                          />

                          {/* Product Quantity */}

                          <p className="my-4 font-bold ">Quantity</p>

                          <div className="md:flex items-center w-full">
                            <Quantity />
                            <div className="">
                              <button
                                type="submit"
                                className="w-full mt-5 md:mt-0 bg-peppermartDark500 border border-transparent rounded-md py-3 px-2 flex items-center justify-center text-base font-medium text-white"
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
