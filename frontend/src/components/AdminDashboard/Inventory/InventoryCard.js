import React from 'react'
import InventoryItems from './InventoryItems'

const InventoryCard = ({stockcolor,volumecolor,textcolor,icon1,icon2,week,text,title,amount,Volume,price,percentage,pricecolor,icon1color,percent,backgroundColor,percentage1}) => {
  return (
    <div className=''>
      <div className="block px-4 rounded-lg shadow-lg bg-white h-32 " style={{backgroundColor:backgroundColor}}>
        <div className="flex justify-center items-center text-white" style={{color:icon1color}}>
          {icon1}
          <div className="flex justify-center items-center ml-auto mb-3">
            <h2 className="mx-2">{week}</h2>
        {icon2}
          </div>
        </div>
        <div className="flex justify-between mt-10 w-auto">
          <div className="mx-3">
            <h4 className="text-zinc-200 text-xs text-white" style={{color:stockcolor}}>{title}</h4>
            <h4 className="font-bold text-white">{amount}  <span className="text-zinc-600 font-bold text-xs text-white">{percent}</span></h4>
          </div>
          <div className="mx-3">
            <h4 className=" text-white text-xs" style={{color:volumecolor}} >{Volume}</h4>
            <h4 className="font-bold flex justify-center items-center text-white" style={{color:pricecolor}}>{price}<span className='ml-4'> <h4 className="text-white font-bold text-xs ">{percentage}</h4></span></h4>
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="text-zinc-200 text-xs">{text}</h4>
            <h4 className="text-zinc-600 font-bold text-xs text-green-300" style={{color:textcolor}}>{percentage1}</h4>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default InventoryCard
