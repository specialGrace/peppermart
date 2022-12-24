import React, { useState } from 'react'

function AddToCartBtn(clickHandler) {
  const [isAdded, setIsAdded] = useState(false)

  const addToCartHandler = () => {
    setIsAdded(true)
  }
  return (
    <div>
      <button
        onClick={addToCartHandler}
        type="submit"
        className="w-full text-sm bg-peppermartDark500 border border-transparent shadow-sm py-2 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {isAdded ? 'Added to Cart!' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default AddToCartBtn
