import Image from 'next/image'
import Icon5 from '../../assets/images/Icon (6).png'
import Icon2col from '../../assets/images/Icon (4).png'
import Icon3col from '../../assets/images/Icon (5).png'
import FilterIcon from '../../assets/images/Filter.png'
import Icon2 from '../../assets/images/Icon2.png'
import Icon4 from '../../assets/images/Icon (3).png'

const filters = [
  { name: '2 Col', icon: Icon2col },
  { name: '3 Col', icon: Icon3col },
  { name: '4 Col', icon: Icon4 },
  { name: '5 Col', icon: Icon4 },
  { name: '1 row', icon: Icon2 },
]

import React from 'react'

function Filter() {
  return (
    <div className="flex justify-between mb-10 flex-col md:flex-row items-center mx-[10%] ">
      <div className="flex justify-center  items-center text-sm md:mb-0 mb-5">
        <Image
          src={FilterIcon}
          alt="Filter Product"
          className="cursor-pointer"
        />
        <span className="ml-2 mr-5">Filters </span>

        {filters.map((icon, i) => {
          return (
            <span
              key={i}
              className="border bg-white p-1 text-center flex items-center justify-center w-7 mx-1 cursor-pointer"
            >
              <Image src={icon.icon} alt="Filter Product" />
            </span>
          )
        })}

        <input type="checkbox" className=" mx-2 w-4 rounded" />
        <p>Show only product </p>
      </div>

      <div className="grid grid-cols-2 items-center justify-center text-sm">
        <p>Sort By</p>

        <select
          name="sort"
          className="mt-1 w-full border pr-10 py-2 text-base sm:text-sm rounded-md"
        >
          <option>Best Selling</option>
          <option>Best Selling</option>
          <option>Recently Added</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
