import React from 'react'

function ProductImages({ name, image, id }) {
  return (
    <div>
      <div
        key={id}
        className="relative h-36 mb-3 rounded-md flex items-center justify-center text-sm font-medium uppercase cursor-pointer  focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
      >
        <>
          <span className="sr-only">{name}</span>
          <span className="absolute inset-0 rounded-md overflow-hidden">
            <img
              src={image}
              height="90px"
              width="115px"
              alt="Product Image Title"
            />
          </span>
        </>
      </div>
    </div>
  )
}

export default ProductImages
