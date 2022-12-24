import React from 'react'
import Link from 'next/link'

function CartBtn({ link }) {
  return (
    <Link href={link}>
      <button className="flex items-center justify-center rounded-md border border-transparent bg-peppermartBtnPrimary2 w-full py-2 text-base font-medium shadow-sm hover:bg-peppermartOrange">
        View Cart
      </button>
    </Link>
  )
}

export default CartBtn
