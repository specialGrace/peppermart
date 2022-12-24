import React, { useState } from 'react'
import ProductMarketing from './ProductMarketing'
import ProductDetailsDescription from './ProductDetailsDescription'
import ProductDetailsReview from './ProductDetailsReview'
import Specification from './Specification'

function ProductInformation() {
  const [description, setDescription] = useState(true)
  const [reviews, setReviews] = useState(false)
  const [specification, setSpecification] = useState(false)

  const descriptionHandler = () => {
    setDescription(true)
    setReviews(false)
    setSpecification(false)
  }

  const reviewsHandler = () => {
    setDescription(false)
    setReviews(true)
    setSpecification(false)
  }

  const specificationHandler = () => {
    setDescription(false)
    setReviews(false)
    setSpecification(true)
  }

  return (
    <section className="my-20">
      <div>
        <div className="flex justify-center items-center space-x-10 text-xl font-bold">
          <h3 onClick={descriptionHandler} className="cursor-pointer">
            Description
          </h3>
          <h3 onClick={specificationHandler} className="cursor-pointer">
            Specifications
          </h3>
          <h3 onClick={() => reviewsHandler(true)} className="cursor-pointer">
            Review
          </h3>
        </div>
      </div>

      <div className="mt-20">
        {description && (
          <>
            <ProductDetailsDescription />
            <ProductMarketing />
          </>
        )}
        {reviews && (
          <>
            <ProductDetailsReview />
          </>
        )}
        {specification && (
          <>
            <Specification />
            <ProductMarketing />
          </>
        )}
      </div>

      {/* <ProductDetailsDescription /> */}
    </section>
  )
}

export default ProductInformation
