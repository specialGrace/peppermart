import React from 'react'
import Image from 'next/image'
import BirthdayBox from '../../assets/images/Vector.png'
import Birthday from '../../assets/images/Avatar.png'
import Christmas from '../../assets/images/Avatar (1).png'
import Wedding from '../../assets/images/Avatar (2).png'
import Birthday2 from '../../assets/images/Avatar (3).png'

const wishDetails = [
  {
    id: 1,
    title: 'Birthday',
    image: Birthday,
    description: "My Birthday is on the 17th Aug and i'll love this",
  },
  {
    id: 2,
    title: 'Christmas',
    image: Christmas,
    description: "My Birthday is on the 17th Aug and i'll love this",
  },
  {
    id: 3,
    title: 'Wedding',
    image: Wedding,
    description: "My Birthday is on the 17th Aug and i'll love this",
  },
  {
    id: 4,
    title: 'Birthday',
    image: Birthday2,
    description: "My Birthday is on the 17th Aug and i'll love this",
  },
]

function WishlistHome() {
  return (
    <section className="mx-10 md:mx-20 my-20 min-h-[100vh]">
      <div className="flex flex-col md:flex-row justify-between items-center my-10 ">
        <div>
          <div className="flex items-center mb-2">
            <Image src={BirthdayBox} alt="Birthday Box" />
            <h1 className="md:text-5xl text-3xl font-bold">
              AbduMalik's Wishlists
            </h1>
          </div>
          <p className="text-peppermartOrange">
            Created by AbduMalik Oladeji. Last updated 23-07-2029
          </p>
        </div>

        <div>
          <button className="text-2xl py-2 px-10 text-white rounded font-bold bg-PeppermartBtnPrimary">
            New Wishlist
          </button>
        </div>
      </div>

      {/* RENDERING THE USER WISHES CARD */}

      <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1 justify-center items-center justify-self-center">
        {wishDetails.map((wish) => (
          <div className="flex p-10 h-[258px] w-[198px] justify-center flex-col items-center border shadow-lg rounded-2xl">
            <Image src={wish.image} />
            <p className="text-xl font-bold">{wish.title}</p>
            <p>{wish.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WishlistHome
