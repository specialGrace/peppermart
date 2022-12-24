import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel, MdAdd, MdRemove } from 'react-icons/md'
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Black Canvas Stripe Sole Trainer',
    href: '#',
    color: 'Salmon',
    size: 'XS',
    material: 'Cotton',
    price: '₦43,740',
    quantity: 1,
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667154798/Rectangle_738-removebg-preview_yv1voi.png',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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

export default function WishlistModal() {
  const [open, setOpen] = useState(true)

  const [qty, setQty] = useState(1)

  const addHandler = (prevQty) => {
    setQty((prevQty) => prevQty + 1)
  }

  const removeHandler = (prevQty) => {
    if (prevQty === 0) {
      return setQty(1)
    }
    setQty((prevQty) => prevQty - 1)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl  font-bold">
                          Wish List
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <MdCancel className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-20 w-20 flex-shrink-0 overflow-hidden">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center p-2"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-sm font-medium">
                                      <h3>
                                        <Link href={product.href}>
                                          {product.name}
                                        </Link>
                                      </h3>
                                    </div>
                                    <p className="mt-1 text-base text-gray-500">
                                      {product.color}, {product.size},
                                      {product.material}
                                    </p>
                                    <p className="mt-2 text-base">
                                      {product.price}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className=" flex md:mr-3 border mt-2 ">
                                      <button
                                        onClick={() =>
                                          removeHandler(product.quantity)
                                        }
                                        className="px-2"
                                      >
                                        <MdRemove size="10px" />
                                      </button>

                                      <span className="">
                                        <input
                                          placeholder="1"
                                          type="number"
                                          className="w-10 border-l pt-1 font-bold text-center focus:outline-none"
                                        />
                                      </span>

                                      <button
                                        onClick={() =>
                                          addHandler(product.quantity)
                                        }
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
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 py-2 px-4 sm:px-6">
                      <div className="mt-6">
                        <Link href="/wishlist">
                          <button className="flex items-center justify-center rounded-md border border-transparent bg-peppermartBtnPrimary2 w-full py-1 text-sm shadow-sm hover:bg-peppermartOrange">
                            View All Wish List
                          </button>
                        </Link>
                      </div>
                      <div className="mt-2 flex justify-center text-center text-sm underline ">
                        <p className="hover:text-peppermartOrange ">
                          or
                          <span
                            type="button"
                            className="font-medium pl-1 cursor-pointer "
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"></span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
