import React from 'react'

const Cards = ({width,icon1,icon2,week,title,amount,Volume,price,percentage,padding,percent,backgroundColor}) => {
    return (
      <div className="flex justify-evenly text-xs w-72 h-32 m-auto mt-4" style={{padding:padding,width:width}}>
        <div className="block px-4 rounded-lg shadow-lg bg-white "style={{backgroundColor:backgroundColor}}>
          <div className="flex justify-between w-56 items-center">
            {icon1}
            <div className="flex justify-between items-center ml-auto mb-3">
              <h2 className="mx-2">{week}</h2>
          {icon2}
            </div>
          </div>
          <div className="flex justify-between mt-10 w-auto">
            <div className="mx-3">
              <h4 className="text-zinc-200">{title}</h4>
              <h4 className="text-zinc-600 font-bold">{amount}  <span className="text-zinc-600 font-bold text-xs text-green-300">{percent}</span></h4>
            </div>
            <div className="mx-3">
              <h4 className="text-zinc-200">{Volume}</h4>
              <h4 className="text-zinc-600 font-bold">{price}</h4>
            </div>
            <div className="flex flex-col justify-between">
              <h4 className="text-zinc-200"></h4>
              <h4 className="text-zinc-600 font-bold text-xs text-green-300">{percentage}</h4>
            </div>
          </div>
        </div>
      </div>
      )}

export default Cards
