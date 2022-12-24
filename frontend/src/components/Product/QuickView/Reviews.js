import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Reviews({ rating, reviewCount }) {
  return (
    <div className="mt-6">
      <h4 className="sr-only">Reviews</h4>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <AiFillStar
              key={rating}
              className={classNames('text-black')}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{rating} out of 5 stars</p>
        <a
          href="#"
          className="ml-3 text-md font-bold hover:cursor-pointer hover:text-peppermartOrange"
        >
          ( {reviewCount})
        </a>
      </div>
    </div>
  )
}

export default Reviews
