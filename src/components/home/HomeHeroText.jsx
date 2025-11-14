import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] lg:pt-5 pt-[42vh] text-center'>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center '>The spark for</div>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
            all
            <div className='lg:h-[7vw] h-[8vw] lg:w-[16vw] w-[20vw] rounded-full -mt-4 overflow-hidden'><Video /></div>
            things
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>creative</div>
    </div>
  )
}

export default HomeHeroText