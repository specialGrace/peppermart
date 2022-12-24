import React from 'react'
import AmericaExpress from '../../assets/images/american logo.png'
import { RiVisaLine } from 'react-icons/ri'
import Paypal from '../../assets/images/Paypal.png'
import Visa from '../../assets/images/Visa.png'
import MasterCard from '../../assets/images/mastercard logo.png'
import Image from 'next/image'

function Summary() {
  return (
    <section
      aria-labelledby="Order Summary Section"
      className="mt-16 border-2 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
    >
      <h2 id="summary-heading" className="text-lg font-bold">
        Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-bold">₦94.14</dd>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Shipping</div>
          <div className="text-sm font-bold">Free</div>
        </div>

        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <div className="flex flex-col text-sm w-full">
            <span className="mb-4">Input E-mail Address</span>
            <input
              type="email"
              name="email"
              className="shadow-sm p-2 block w-full sm:text-sm rounded-lg"
            />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span>Discount Code</span>

            <div className="flex mt-4 w-full">
              <input
                type="text"
                name="discount"
                placeholder="Enter Coupon"
                className="shadow-sm p-2 text-sm w-72 block sm:text-sm rounded-lg "
              />

              <button>
                <span className="px-6 py-2 bg-PeppermartBtnPrimary rounded-lg text-white ml-5">
                  Apply
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <div className="text-base font-medium ">Total</div>
          <div className="text-base font-bold">₦94.14</div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full text-sm bg-PeppermartBtnPrimary border border-transparent rounded-md shadow-sm py-2 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Proceed to Checkout
        </button>

        <div className="flex justify-center items-center mt-5">
          <Image src={Paypal} alt="Paypal" />
          <Image src={Visa} alt="Visa" />
          <Image src={AmericaExpress} alt="American Express" />
          <Image src={MasterCard} alt="MasterCard" />
        </div>
      </div>
    </section>
  )
}

export default Summary
