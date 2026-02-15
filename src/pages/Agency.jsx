import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Agency() {
  gsap.registerPlugin(ScrollTrigger)
  
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const section3DivRef = useRef(null);

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
    // const mm = gsap.matchMedia();
    // mm.add("(min-width: 800px)", ()=>{
    // });

    const accountDivs = gsap.utils.toArray(".account-manager");
   
    gsap.to(imageDivRef.current, { 
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 30%',
          end: 'top -95%',
          scrub: true,
          pin: true,
          // pinSpacing: false,
          pinReparent: true,
          pinType: 'transform',
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: true,
          onUpdate: (elem) => {
            const imageIndex = Math.floor(elem.progress * (imageArray.length-1))
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      })

    gsap.to(".main-background", {
      backgroundColor: "#000000",
      color: "#ffffff",
      duration: 0.3,
      scrollTrigger: {
        trigger: ".section3",
        start: 'top 70%',
        end: 'top 70%',
        toggleActions: 'play none reverse none',
        markers: true
      }
    })


    accountDivs.forEach((div, i)=>{
      gsap.to(div, {
        scrollTrigger: {
          trigger: div,
          start: 'top top',
          end: '+=200%',
          pin: true,
          pinSpacing: false,
          pinReparent: true,
          pinType: 'transform',
          anticipatePin: true,
          invalidateOnRefresh: true,
          scrub: true,
          markers: true
        }
      })
    })


    // mm.add("(max-width: 799px)", ()=>{
    //   let i = 0;
    //   const interval = setInterval(() => {
    //     if (imageRef.current) {
    //       imageRef.current.src = imageArray[i % imageArray.length];
    //       i++;
    //     }
    //   }, 1000);
    // });
    ScrollTrigger.refresh();
    
  });


  return (
    <div className='main-background selection:bg-[#D3FD50] bg-white text-black' >
      <div className=' section1'>
        <div ref={imageDivRef} className='absolute top-[15vw] left-[30vw] lg:h-[20vw] lg:w-[15vw] h-[26vw] w-[18vw] rounded-2xl overflow-hidden object-cover '>
          <img ref={imageRef} className='h-full w-full' src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7' alt='Dynamic' />
        </div>

        <div className='relative font-[font2]'>
          <div className='pt-[30vw]'>
            <h1 className='lg:text-[20vw] text-6xl text-center uppercase leading-[17.5vw]'>SEVEN7Y<br />TWO</h1>
          </div>
          <div className='lg:pl-[40%] p-2 lg:mt-5 mt-20' >
            <p className='lg:text-6xl text-xl'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen p-[10vw]">
        <div className='text-[1.3rem] font-[font2] h-full w-full grid grid-rows-2 grid-cols-3 gap-10'>
          <p className=''>Expertise</p>
          <div className=''>
            <ul>
              <li>Strategy</li>
              <li>Advertising</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Content</li>
            </ul>
          </div>
          <p className=''></p>
          <p className=''>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
          <p className=''>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
          <p className=''>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
        </div>
      </div>

      <div ref={section3DivRef} className='section3'>
        <div className='account-manager h-screen flex justify-center'>
          <img className='h-full rounded-3xl object-cover w-1/3' src={imageArray[4]}/>
        </div>
        <div className='account-manager h-screen flex justify-center '>
          <img className='h-full rounded-3xl object-cover w-1/3' src={imageArray[1]}/>
        </div>
      </div>

      <div className='section4 relative bg-black h-screen z-4'>
        
      </div>
    </div>
  )
}


export default Agency

