import React from 'react'
import Styles from './createWishlist.module.css'
import { FiEdit, FiSend } from 'react-icons/fi'

function CreateWishlist() {
  return (
    <div>
      <div
        className={`flex text-white flex-col w-full min-h-full flex-1 justify-center items-center ${Styles.wishlistCon}`}
      >
        <h1 className="text-5xl font-bold">CREATE YOUR WISHLIST</h1>
        <p className="my-5 text-xl">
          For all occasions - Weddings, birthdays, baby showers
        </p>

        <div className="flex justify-center items-center">
          <FiEdit />
          <p className="text-xl ml-5">Create a list</p>
        </div>
        <div className="flex justify-center items-center">
          <FiSend />
          <p className="my-5 text-xl ml-5">Send to family and friends</p>
        </div>

        <div>
          <button className="text-2xl py-4 px-10 rounded font-bold bg-PeppermartBtnPrimary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateWishlist
