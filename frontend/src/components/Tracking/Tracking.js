import React from 'react'
import Link from 'next/link'

function Tracking() {
  return (
    <section className="flex flex-col justify-center items-center flex-1 w-full my-5 ">
      <h1 className="text-3xl font-medium my-8">Order Tracking</h1>

      <p className="text-sm mb-5 text-center">
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was <br /> given to you on your receipt
        and in the confirmation email you should have received.
      </p>

      <form>
        <div className="flex flex-col text-sm mb-5">
          <label htmlFor="email">
            Username or email address
            <sup className="text-peppermartOrange">*</sup>
          </label>
          <input
            type="text"
            className="py-2 px-4 w-60 mt-2 rounded text-sm border-2 border-[gray] min-w-[350px]"
            placeholder="Found in your order confirmation email"
            name="order_id"
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="order_id">
            Order ID
            <sup className="text-peppermartOrange">*</sup>
          </label>
          <input
            type="text"
            className="py-2 px-4 rounded w-60 text-sm border-2 border-peppermartDark500 min-w-[350px]"
            placeholder="Email you used for order"
            name="order_id"
          />
        </div>
        <Link href="/trackinginfo">
          <button
            type="submit"
            className="py-2 px-4 rounded text-sm border-2 text-white bg-peppermartDark500 min-w-[350px] mt-5"
          >
            Tracking order
          </button>
        </Link>

        <p className="text-center text-sm mt-3">
          Returning customer?
          <Link href="/login">
            <span className="underline text-peppermartDark500">Login here</span>
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Tracking
