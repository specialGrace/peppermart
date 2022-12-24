import React from 'react'
import {FaChevronDown} from 'react-icons/fa'
import Form from './Form'

const NewInventory = () => {
  return (
    <div className='mr-10'>
      <div className='flex justify-between'>
      <h2 className='text-sm'>New Inventory</h2>
      <div className='mr-6 flex justify-between items-center'>
        <button className='shadow rounded bg-black text-xs text-white py-2 px-4 flex justify-between items-center mr-4'><h4 className='mr-2'>Save as Draft </h4><FaChevronDown size={12}/></button>
        <button className='shadow rounded text-xs text-white py-2 px-4' style={{backgroundColor:"#1F2B5B"}}>Save & publish</button>
      </div>
      </div>
      <Form/>
      
    </div>
  )
}

export default NewInventory
