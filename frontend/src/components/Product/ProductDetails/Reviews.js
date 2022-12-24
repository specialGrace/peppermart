import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Reviews({ rating, reviews }) {
  return (
    <div className="mt-3">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rate) => (
            <AiFillStar
              key={rating}
              className={classNames(
                rating > rate ? 'text-black' : 'text-gray-300',
                'h-5 w-5 flex-shrink-0',
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="pl-3">({reviews} reviews)</p>
      </div>
    </div>
  )
}

export default Reviews
