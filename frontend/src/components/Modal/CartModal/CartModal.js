import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel, MdAdd, MdRemove } from 'react-icons/md'
import Link from 'next/link'
import CartModalProduct from './CartModalProduct'

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

export default function CartModal() {
  const [open, setOpen] = useState(true)

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
          <div className="z-[1000] absolute inset-0 overflow-hidden">
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
                          Shopping cart
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

                      {/* Rendering the Products In Cart Here */}
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <CartModalProduct
                                id={product.id}
                                image={product.imageSrc}
                                name={product.name}
                                material={product.material}
                                size={product.size}
                                color={product.color}
                                quantity={product.quantity}
                                price={product.price}
                                href={product.href}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base">
                        <p>Shipping</p>
                        <p className="text-gray-300">FREE</p>
                      </div>

                      <div className="flex justify-between text-sm mb-3 ">
                        <p>Discount</p>
                        <p>₦44.99</p>
                      </div>

                      <div className="flex justify-between text-sm border-t pt-3 ">
                        <p>Subtotal</p>
                        <p>₦186.09</p>
                      </div>

                      <div className="mt-6">
                        <Link href="/cart">
                          <button className="flex items-center justify-center rounded-md border border-transparent bg-peppermartBtnPrimary2 w-full py-1 text-base font-medium shadow-sm hover:bg-peppermartOrange">
                            View Cart
                          </button>
                        </Link>

                        <Link href="/checkout">
                          <button className="flex mt-2 items-center justify-center rounded-md border border-transparent bg-PeppermartBtnPrimary w-full py-1 text-base font-medium text-white shadow-sm hover:bg-peppermartOrange">
                            Checkout
                          </button>
                        </Link>
                      </div>
                      <div className="mt-2 flex justify-center text-center text-sm underline ">
                        <p>
                          or
                          <span
                            type="button"
                            className="font-medium pl-1"
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
