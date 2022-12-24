import React from 'react'
import TopSellingItems from './TopSellingItems'
import TopVendor from './TopVendor'
import Recommended from './Recommended'
import Featured from './Featured'
import BrowseCategories from './BrowseCategories'
import Slider from '../Slider/Slider'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <div>
      <section className="flex justify-center flex-col md:flex-row items-center py-10 w-full bg-PeppermartHomeBg">
        <div className="lg:w-[60%]">
          <Slider />
        </div>
        <div className="md:w-[40%] md:ml-3 hidden lg:block">
          <Hero />
        </div>
      </section>

      <TopSellingItems />
      <BrowseCategories />
      <TopVendor />
      <Recommended />
      <Featured />
    </div>
  )
}

export default Home
