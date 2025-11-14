import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

function Stairs(props) {
  
    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)
  
    useGSAP(function() {

        const tl = gsap.timeline()

        // Show the transition overlay
        tl.set(stairParentRef.current, {
          display: 'block'
        })

        // Stairs drop down to cover screen
        tl.from('.stair', {
          y: '-100%',
          stagger: {
            amount: 0.2,
            from: 'end'
          },
          duration: 0.4,
          ease: 'power2.inOut'
        })

        // Hold for a brief moment (screen is covered)
        tl.to({}, { duration: 0.1 })

        // Stairs rise up to reveal new content
        tl.to('.stair', {
          y: '100%',
          stagger: {
            amount: 0.2,
            from: 'end'
          },
          duration: 0.4,
          ease: 'power2.inOut'
        })

        // Hide the overlay
        tl.set(stairParentRef.current, {
          display: 'none'
        })

        // Reset stairs position for next transition
        tl.set('.stair', {
          y: '0%'
        })
        
        gsap.from(pageRef.current, {
          opacity: 0,
          delay: 1,
          scale: 1.2
        })
    }, [currentPath])

  
    return (
    <div>
      <div ref={stairParentRef} className='h-screen w-full fixed z-10 top-0'>
        <div className='h-full w-full fixed flex'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stairs