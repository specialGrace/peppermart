import React, { useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'
import { BsBookmarkStar } from 'react-icons/bs'
import Styles from './Product.module.css'
import QuickView from '../QuickView/QuickView'

function ProductTooltips({ quickView }) {
  const [tooltipStatus, setTooltipStatus] = useState(false)
  const [tooltipText, setTooltipText] = useState(false)

  const [viewProduct, setViewProduct] = useState(false)
  const [saveProductText, setSaveProducttext] = useState(false)

  const [toolTips, setToolTips] = useState({
    favorite: false,
    view: false,
    save: false,
  })

  const toolTipsTextHandler = () => {
    setTooltipText(true)
  }
  const saveProductHandler = () => {
    setSaveProducttext(true)
  }

  return (
    <div className="bg-black w-full h-full hover:cursor-pointer z-[1000]">
      {viewProduct === true && <QuickView />}

      <div
        onMouseEnter={() => setToolTips({ ...toolTips, favorite: true })}
        onMouseLeave={() => setToolTips({ ...toolTips, favorite: false })}
        onClick={saveProductHandler}
        className={`${Styles.iconBox}  cursor-pointer absolute right-3 top-5 rounded-lg shadow-lg p-2  h-auto block bg-white`}
      >
        <MdOutlineFavoriteBorder size="15px" />
        {toolTips.favorite === true && (
          <div
            role="tooltip"
            className="z-20 absolute items-end w-20 transition duration-150 ease-in-out top-0 right-10  flex text-sm shadow-lg bg-peppermartDark500 rounded"
          >
            <p className="text-[10px] p-1 text-center font-bold text-white bg-peppermartDark500 pb-1">
              {saveProductText === true
                ? 'Added To Wishlist'
                : 'Add To Wishlist'}
            </p>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setToolTips({ ...toolTips, view: true })}
        onMouseLeave={() => setToolTips({ ...toolTips, view: false })}
        onClick={() => setViewProduct(true)}
        className={`${Styles.iconBox} cursor-pointer absolute right-3 top-16 rounded-lg shadow-lg p-2  h-auto block bg-white`}
      >
        <AiOutlineEye size="15px" />
        {toolTips.view === true && (
          <div
            role="tooltip"
            className="z-20 absolute items-end w-12 transition duration-150 ease-in-out top-0 right-12  flex text-sm shadow-lg bg-peppermartDark500 rounded"
          >
            <p className="text-[10px] p-1 text-center font-bold text-white bg-peppermartDark500 pb-1">
              QuickView
            </p>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setToolTips({ ...toolTips, save: true })}
        onMouseLeave={() => setToolTips({ ...toolTips, save: false })}
        onClick={toolTipsTextHandler}
        className={`${Styles.iconBox} cursor-pointer absolute right-3 top-28 rounded-lg shadow-lg p-2  h-auto block bg-white`}
      >
        {toolTips.save === true && (
          <div
            role="tooltip"
            className="z-20 absolute items-end w-8 transition duration-150 ease-in-out top-0 right-10  flex text-sm shadow-lg bg-peppermartDark500 rounded"
          >
            <p className="text-[10px] p-1 text-center font-bold text-white bg-peppermartDark500 pb-1">
              {tooltipText === true ? 'Saved!' : 'Save'}
            </p>
          </div>
        )}
        <BsBookmarkStar size="15px" />
      </div>
    </div>
  )
}

export default ProductTooltips
