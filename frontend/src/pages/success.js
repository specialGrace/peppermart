import React from 'react'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'

function success() {
  return (
    <Layout>
      <section>
        <div className="flex flex-col justify-center items-center flex-1 w-full my-10 ">
          <h1 className="text-sm font-medium my-8">
            Thank You For Your Purchase
          </h1>

          <div className="md:mt-20">
            <p className="text-3xl mb-5 text-center">
              Order #123RGR231567Y Confirmed
            </p>
            <Link href="/tracking">
              <button
                type="submit"
                className="w-full text-sm mt-10 bg-peppermartDark500 border border-transparent shadow-sm py-2 px-4 font-medium text-white focus:outline-none"
              >
                Track Order
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default success
