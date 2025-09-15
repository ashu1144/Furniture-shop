import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import Brands from './Brands'
import FeatureProducts from './FeatureProducts'
import TopCatogories from './TopCatogories'
import OurProducts from './OurProducts'
import Clinet from './Clinet'
import RecentlyAdded from './RecentlyAdded'
import MobileSearch from './MobileSearch'
const Home = () => {
  return (
  <div>
    <MobileSearch />
    <Categories />
    <Hero />
    <Brands />
    <FeatureProducts />
    <TopCatogories />
    <OurProducts />
    <Clinet />
    <RecentlyAdded />
  </div>
  )
}

export default Home