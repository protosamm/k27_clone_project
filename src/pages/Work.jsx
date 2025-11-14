import React from 'react'
import ProjectCard from '../components/work/ProjectCard'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'


function Work() {
  const projects = [
  {
    image1: '/images/Work-thumbnails/OKA_thumbnail.jpg',
    image2: '/images/Work-thumbnails/opto_thumbnail2.jpg'
  },
  {
    image1: '/images/Work-thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg',
    image2: '/images/Work-thumbnails/WS---K72.ca---Thumbnail.jpg'
  },
  {
    image1: '/images/Work-thumbnails/BEST_site_Thumbnail.jpg',
    image2: '/images/Work-thumbnails/CF_thumbnail.jpg'
  },
  {
    image1: '/images/Work-thumbnails/chalaxeur-thumbnail_img.jpg',
    image2: '/images/Work-thumbnails/thumbnailimage_opto.jpg'
  },
  {
    image1: '/images/Work-thumbnails/thumbnailimage_OSM.jpg',
    image2: '/images/Work-thumbnails/thumbnailimage_shelton.jpg'
  }
]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from('.hero',{
      height: '100px',
      stagger: {
        amount: 0.5
      },
      scrollTrigger:{
        trigger: '.hero-parent',
        start: 'top 100%',
        end: 'top -150%',
        // markers: true,
        scrub: true
      }
    })
  })

  return (
    <div className='bg-white lg:p-3'>
      <div className='pt-[40vh]'>
        <h2 className=' text-black font-[font2] text-[14.5vw] uppercase'>Work</h2>
      </div>
      <div className='hero-parent -mt-20'>
        {projects.map((elem,idx) => (
            <div key={idx} className="hero w-full h-[500px] bg-white my-2.5">
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
        ))}

      </div>
    </div>
  )
}

export default Work