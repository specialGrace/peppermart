import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import Line1 from '../../assets/images/Line 1.png'
import Line2 from '../../assets/images/Line 2.png'
import Line3 from '../../assets/images/Line 3.png'
import Image from 'next/image'
import Styles from './TrackingDetails.module.css'

const trackingdetails = [
  {
    location: 'Rider Pick Up',
    time: '10:30 am',
    icon: <BsCircleFill size="120px" color="#EB67A6" />,
    image: Line1,
  },

  {
    location: 'Rider is on the way',
    time: '10:35 am',
    icon: <BsCircleFill size="120px" color="#379794" />,
    image: Line2,
  },

  {
    location: 'Rider has Delivered',
    time: '10:40 am',
    icon: <BsCircleFill size="120px" color="#F4AC5D" />,
    image: Line3,
  },
]

function TrackingDetails() {
  return (
    <section className={` ${Styles.conBackground}`}>
      <div className="flex my-40 justify-evenly items-center flex-col md:flex-row">
        {trackingdetails.map((details, i) => (
          <div
            key={i}
            className="flex flex-col pt-10 md:pt-0 justify-center items-center relative"
          >
            <div className="flex pl-40">
              <Image src={details.image} alt="Rider Pick up Line" />
              <div className="ml-3">
                <p className="font-bold text-xl">{details.location}</p>
                <p>{details.time}</p>
              </div>
            </div>
            <div className="mt-5">{details.icon}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrackingDetails
