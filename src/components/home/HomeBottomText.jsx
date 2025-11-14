import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>
      <div className='border-3 border-white hover:border-[#D3fd50] hover:text-[#D3fd50] rounded-full px-[4%] pt-[3%] lg:px-8 lg:pt-4 uppercase'>
        <Link className='lg:text-[7vw] text-[10vw] leading-[5vw]' to='/work'>Work</Link>
      </div>
      <div className='border-3 border-white hover:border-[#D3fd50] hover:text-[#D3fd50] rounded-full px-[4%] pt-[3%] lg:px-8 lg:pt-4 uppercase  '>
        <Link className='lg:text-[7vw] text-[10vw] leading-[5vw]' to='/agency'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText