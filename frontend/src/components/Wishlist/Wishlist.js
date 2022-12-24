import React from 'react'
import WishlistItems from './WishlistItems'

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

export default function WishList() {
  return (
    <div>
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
          My Wishlist
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-6 lg:gap-x-12 lg:items-start xl:gap-x-16 text-sm">
          <section className="lg:col-span-7 border">
            <h2 className="sr-only">Items in your WishList</h2>

            <div className="flex py-2 justify-around items-center border w-full border-b-2">
              <div className="w-1/5">Products</div>
              <div>Total</div>
              <div>Available</div>
              <div>Quantity</div>
              <div></div>
              <div></div>
            </div>

            <WishlistItems />
          </section>
        </div>

        <div className="flex items-center text-center mt-10">
          <p>Wishlist Link:</p>
          <div>
            <input
              type="text"
              name="wishlist"
              placeholder="https://peppertmart.com/wishlist/xtyywiilsld"
              className="p-2 border rounded-lg ml-2"
            />
          </div>

          <div>
            <button className="text-white px-8 py-3 rounded-lg ml-2 bg-PeppermartBtnPrimary">
              copy
            </button>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-bold text-2xl">Best Sellers This week</h2>
          <p className="text-[grey]">Top sales this week</p>
        </div>
      </div>
    </div>
  )
}
