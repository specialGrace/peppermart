import React from 'react'
import phone from '../../assets/images/phone.png'
import Image from 'next/image'

const RecentOrders = () => {
const data=[{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
},
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
}
,
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
}
,
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
}
,
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
}
,
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
}
,
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
},
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
},
{
    image:phone,
    device:"iphone13",
    price:"730,000.00",
    date:"12/11/22",
    action:["pending","completed"]
}]
console.log(data)
  return (
    <div className="overflow-hidden">
    <table className='min-w-full bg-white rounded shadow'>
    <tbody>
    {
        data.map((item,index)=>(
            <tr class="border-b" key={index}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-enter items-center">
              <Image 
              src={item.image} 
              alt='phoneimage'
              width={50}
              height={50}
            className='w-2'/>
              <div className='ml-6'>
              <h3>{item.device}</h3>
                <h3>{item.price}</h3>
                </div>
                </td>
              
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h3>{item.date}</h3>
                <button className='shadow rounded bg-red-300'>{item.action[0]}</button>
              </td>
            </tr>
        ))
    } 
</tbody>
    </table> 
    </div>
  )
}

export default RecentOrders
