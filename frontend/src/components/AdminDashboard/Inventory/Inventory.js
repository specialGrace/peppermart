import React from 'react'
import InventoryCard from './InventoryCard'
import { FiUsers } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import {TiShoppingBag} from "react-icons/ti"
const Inventory = () => {
  return (
    <div>
    <div className='flex justify-between'>
      <div><h3>Inventory summary</h3></div>
      <div className='mb-4 mr-10 '><button className='text-white rounded shadow px-3 md:xs' style={{backgroundColor:"#1F2B5B"}}><span className='text-white font-bold mx-4 '>+</span>Add a new product</button></div>
    </div>
      <div className='grid lg:grid-cols-2 gap-4 md:grid md:grid-cols-1'>
        <div><InventoryCard
         icon1={<TiShoppingBag/>}
                title="All products"
                amount="350"
                Volume="Active"
                price="316"
                percentage="+86%"
                backgroundColor="#1F2B5B"
      /></div>
        <div>
        <InventoryCard
         icon1={<FiUsers/>}
         icon1color="black"
                icon2={<FaChevronDown/>}
                week="This week"
                title="Low Stock Alert"
                amount="23"
                Volume="Expired"
                volumecolor="gray"
                text="1 start rating"
                price="3"
                pricecolor="black"
                percentage1="2"
                percent="23"
                textcolor="black"
                stockcolor="red"
                
      />
        </div>
      </div>
    </div>
  )
}

export default Inventory
