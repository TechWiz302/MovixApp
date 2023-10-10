import React from 'react'
import "./Home.scss"
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'

function Home() {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home