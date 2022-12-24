import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

function NextSlideArrow(props) {
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
      <div className="py-2 relative">
        <div className="text-center bg-peppermartOrange absolute rounded-l-3xl ">
          <MdNavigateNext size="30px" color="white" />
        </div>
      </div>
    </div>
  )
}

export default NextSlideArrow
