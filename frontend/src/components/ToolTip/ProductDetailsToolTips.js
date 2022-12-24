import React, { useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { CiBookmark } from 'react-icons/ci'

function ProductDetailsToolTips() {
  const [wishlist, setWishList] = useState(false)
  const [save, setSave] = useState(false)

  const saveHandler = () => {
    setSave(!save)
  }
  const wishlistHandler = () => {
    setWishList(!wishlist)
  }
  return (
    <>
      <span
        onMouseEnter={saveHandler}
        onMouseLeave={() => setSave(false)}
        className="cursor-pointer bg-white shadow-xl p-2 border rounded relative"
      >
        {save && (
          <div className=" text-white bottom-12 right-[2px]  rounded absolute text-[12px] w-10 text-center p-1 bg-peppermartDark500">
            <p>Save</p>
          </div>
        )}
        <CiBookmark size="25px" />
      </span>
      <span
        onMouseEnter={wishlistHandler}
        onMouseLeave={() => setWishList(false)}
        className="cursor-pointer bg-white shadow-xl p-2 border rounded relative"
      >
        {wishlist && (
          <div className=" text-white bottom-12 right-[-10px]  rounded absolute text-[12px] w-14 p-1 bg-peppermartDark500">
            <p>Wish List</p>
          </div>
        )}

        <MdFavoriteBorder size="25px" />
      </span>
    </>
  )
}

export default ProductDetailsToolTips
