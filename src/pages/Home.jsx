import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

function Home() {
  return <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='flex h-screen w-screen relative pb-5 overflow-hidden flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
  </div>
}

export default Home