import React from 'react'

function ProductDetailsDescription({ description }) {
  return (
    <>
      <div>
        <h4 className="font-bold">About This Product</h4>
        <p>
          Keep your home organized, yet elegant with storage cabinets by H&N
          Patio Furniture. These cabinets not only make a great storage units,
          but also bring a great decorative accent to your decor. Traditionally
          designed, they are perfect to be used in the hallway, living room,
          bedroom, office or any place where you need to store or display
          things. Made of high quality materials, they are sturdy and durable
          for years. Bring one-of-a-kind look to your interior with furniture
          from H&N Patio Furniture!
        </p>

        <div className="flex items-start my-10 space-x-20">
          <div>
            <h4 className="font-bold">Versatile Use</h4>
            <p>
              Indochine style Interior design is a mix of traditional Asian
              nostalgia and French romance. This skillfully crafted cabinet will
              perfectly enhance your indoor furnishing, while leaving a
              long-lasting impression and a traditional accent.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Versatile Use</h4>
            <p>
              Explore the many possibilities of transforming your home with our
              Decor Transfers. Exceptionally detailed, gorgeously composed and
              effortlessly easy to apply, these transfers will transform your
              living space.
            </p>
          </div>
        </div>

        <h4 className="font-bold">Features Products</h4>
        <p>
          Explore the many possibilities of transforming your home with our
          Decor Transfers. Exceptionally detailed, gorgeously composed and
          effortlessly easy to apply, these transfers will transform your living
          space.
        </p>
      </div>
    </>
  )
}

export default ProductDetailsDescription
