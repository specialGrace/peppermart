import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

function PrevSlideArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        right: '20px',
        top: '40%',
      }}
      onClick={onClick}
    >
      <div className=" ml-10 flex relative bg-black">
        <div className="text-center bg-peppermartOrange z-[1000px] absolute right-[1px] rounded-r-3xl">
          <MdOutlineKeyboardArrowLeft size="30px" color={'white'} />
        </div>
      </div>
    </div>
  )
}

export default PrevSlideArrow
