import React from 'react'


const ViewCards = ({views,orders,sum,clock,arrowDown,amount}) => {
  return (
      <div className='rounded w-64 shadow text-xs h-32 bg-gray-50 p-4'>
      <div className='flex justify-between '>
      <div>{clock}</div>
      <div className='flex items-center'>
      <h3 className='mr-1'>All time</h3>
      <div>{arrowDown}</div>
      </div>
      </div>
    <div className='flex justify-between mt-8'>
    <div className='flex justify-between flex-col'>
        <h3 className='text-gray-500'>{orders}</h3>
        <h4 className='text-gray-500'>{sum}</h4>
     </div>
     <div className='text-gray-500 flex flex-col' >
        <h3 className='text-gray-500'>{views}</h3>
        <h4 className='text-gray-500'>{amount}</h4>
     </div>
    </div>
      </div>
  )
}

export default ViewCards
