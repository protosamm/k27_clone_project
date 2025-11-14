import React from 'react'

function ProjectCard(props) {
  return (
    <div className='flex lg:flex-row flex-col gap-2.5 w-full h-full origin-bottom'>
      <div className='relative group lg:w-1/2 h-full transition-all hover:rounded-[50px] overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.image1} alt='' />
        <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
        <h2 className='uppercase text-6xl font-[font2] border-3 rounded-full px-4 pt-3 leading-11'>View Project</h2>
        </div>
      </div>
      <div className='relative group lg:w-1/2 h-full transition-all hover:rounded-[50px] overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.image2} />
        <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
        <h2 className='uppercase text-6xl font-[font2] border-3 rounded-full px-4 pt-3 leading-11'>View Project</h2>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard