import React, { useState } from 'react'
import Styles from './Product.module.css'
import AddToCartBtn from '../../Button/AddToCartBtn'
import ProductTooltips from './ProductTooltips'
import QuickView from '../QuickView/QuickView'

export default function ProductComponent({ title, price, image }) {
  const [showQuickView, setShowQuickView] = useState(false)

  const handleQuickView = () => {
    setShowQuickView(!showQuickView)
  }
  return (
    <div>
      <div
        onMouseEnter={handleQuickView}
        onMouseLeave={() => setShowQuickView(false)}
        className="py-3 lg:py-0"
      >
        <div className="relative ">
          <div
            className={`relative h-72 mx-2 overflow-hidden ${Styles.productbox}`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover "
            />

            {/* Icons and ToolTips */}

            <div
              className={`bg-peppermartOrange cursor-pointer absolute left-3 top-3 shadow-lg px-2 h-auto bloc`}
            >
              <span className="text-white text-[12px]">-25%</span>
            </div>

            {showQuickView && <ProductTooltips />}
          </div>
        </div>
        <div>
          {showQuickView && <AddToCartBtn />}
          {/* <AddToCartBtn /> */}
        </div>
      </div>
    </div>
  )
}
