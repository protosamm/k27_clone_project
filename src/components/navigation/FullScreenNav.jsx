import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useContext, useRef } from "react"
import { NavbarContext } from "../../context/NavContext"

function FullScreenNav() {

  const fullNavLinksRef = useRef(null)
  const fullscreennavRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  
  function gsapAnimation() {
    const tl = gsap.timeline()
    gsap.set('.cross', {
      x: '150%'
    })
    tl.to('.fullscreennav', {
      display: 'block'
    })
    
    tl.to('.cross', {
      x: '0%',
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
    tl.to('.nav-stair', {
      height: '100%',
      stagger: {
        amount: -0.3
      }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3
      }
    })
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.nav-stair', {
      height: 0,
      stagger: {
        amount: 0.1
      }
    })

    tl.to('.cross', {
      x: '150%'
    })

    tl.to('.fullscreennav', {
      display: 'none',
    })
  }


  useGSAP(function () {
    if (navOpen) {

      gsapAnimation()
    } else {

      gsapAnimationReverse()

    }
  }, [navOpen])

  return (
    <div ref={fullscreennavRef} id='hidden fullscreennav' className="fullscreennav top-0 overflow-hidden text-white h-screen w-full z-50 absolute">
      <div className="h-screen w-full fixed">
        <div className='h-full w-full fixed flex'>
          <div className='nav-stair h-full w-1/5 bg-black'></div>
          <div className='nav-stair h-full w-1/5 bg-black'></div>
          <div className='nav-stair h-full w-1/5 bg-black'></div>
          <div className='nav-stair h-full w-1/5 bg-black'></div>
          <div className='nav-stair h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink fixed top-0 flex w-full justify-between items-start">
          <div className="k27 p-3">
            <div className="w-26">
              <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
              </svg>
            </div>
          </div>
          <div onClick={() => setNavOpen(false)} className="cross relative h-25 w-25 m-4 cursor-pointer overflow-x-hidden">
            <div className="absolute h-35 w-0.5 -rotate-45 origin-top bg-white" ></div>
            <div className="absolute h-35 w-0.5 right-0 rotate-45 origin-top bg-white" ></div>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center" >
          <div className="link origin-top relative  border-y border-gray-300">
            <h1 className='font-[font2] text-[8vw] leading-[0.7] text-center pt-5 uppercase'>Work</h1>
            <div className="move-link absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
            </div>
          </div>
          <div className="link origin-top relative  border-b border-gray-300">
            <h1 className='font-[font2] text-[8vw] leading-[0.7] text-center pt-5 uppercase'>Agency</h1>
            <div className="move-link absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
            </div>
          </div>
          <div className="link origin-top relative  border-b border-gray-300">
            <h1 className='font-[font2] text-[8vw] leading-[0.7] text-center pt-5 uppercase'>Contact</h1>
            <div className="move-link absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
            </div>
          </div>
          <div className="link origin-top relative  border-b border-gray-300">
            <h1 className='font-[font2] text-[8vw] leading-[0.7] text-center pt-5 uppercase'>Blog</h1>
            <div className="move-link absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 object-cover object-center rounded-full" src="/images/navBarWork/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font1] text-[8vw] leading-[0.7] text-center pt-5 uppercase">See EveryThing</h2>
                <img className="shrink-0 h-20 w-60 rounded-full" src="/images/navBarWork/WS---K72.ca---MenuThumbnail.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav