import React from 'react'
import OfferBanner from './OfferBanner'
import Navbar from './Navbar'
import Categories from './Categories'
import Hero from './Hero'
import Brands from './Brands'
import FeatureProducts from './FeatureProducts'
import TopCatogories from './TopCatogories'
import OurProducts from './OurProducts'
import Clinet from './Clinet'
import RecentlyAdded from './RecentlyAdded'
import Footer from './Footer'
const Home = () => {
  return (
  <div>
    <OfferBanner></OfferBanner>
    <div className='sticky top-0 z-99999'>
      <Navbar></Navbar>
    </div>
    <Categories></Categories>
    <Hero></Hero>
    <Brands></Brands>
    <FeatureProducts></FeatureProducts>
    <TopCatogories></TopCatogories>
    <OurProducts></OurProducts>
    <Clinet></Clinet>
    <RecentlyAdded></RecentlyAdded>
    <Footer></Footer>

    

  </div>
  )
}

export default Home