import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Agency() {
  gsap.registerPlugin(ScrollTrigger)
  
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    '/images/Michele_480X640_2.jpg',
    '/images/ChantalG_480x640_2.jpg',
    '/images/MEL_480X640_2.jpg',
    '/images/SophieA_480x640_2.jpg',
    '/images/Carl_480x640_2.jpg',
    '/images/HugoJoseph_480x640_2.jpg',
    '/images/Olivier_480x640_2.jpg',
    '/images/Lawrence_480x640_2.jpg',
    '/images/CAMILLE_480X640_2_2.jpg',
    '/images/joel_480X640_3_2.jpg?',
    '/images/MEGGIE_480X640_2_2.jpg'
  ]


  useGSAP(()=>{
    const mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", ()=>{
      gsap.to(imageDivRef.current, { 
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 24%',
          end: 'top -160%',
          scrub: true,
          // pin: true,
          // markers: true,
          onUpdate: (elem) => {
            const imageIndex = Math.floor(elem.progress * (imageArray.length-1))
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      })
    });

    mm.add("(max-width: 799px)", ()=>{
      let i = 0;
      const interval = setInterval(() => {
        if (imageRef.current) {
          imageRef.current.src = imageArray[i % imageArray.length];
          i++;
        }
      }, 1000);
    });

    
  });


  return (
    <div className='bg-white text-black' >
      <div className='section1'>
        <div ref={imageDivRef} className='absolute lg:h-[20vw] lg:w-[15vw] h-[26vw] w-[18vw] lg:top-39 lg:left-102 top-30 left-27 rounded-2xl overflow-hidden object-cover'>
          <img ref={imageRef} className='h-full w-full' src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7' alt='Dynamic' />
        </div>

        <div className=' relative font-[font2]'>
          <div className='lg:pt-[55vh] pt-[50vw]'>
            <h1 className='lg:text-[20vw] text-6xl text-center uppercase leading-[17.5vw]'>SEVEN7Y<br />TWO</h1>
          </div>
          <div className='lg:pl-[40%] p-2 lg:mt-5 mt-20' >
            <p className='lg:text-6xl text-xl'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen">
      </div>
    </div>
  )
}


export default Agency

