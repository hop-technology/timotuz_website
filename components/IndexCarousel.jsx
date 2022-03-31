import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

const IndexCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div className='index-carousel'>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide'>
            <Image
              src='/street1440p.webp'
              alt='Gatu vy nyproduktionsprojektet Aurora'
              // height={1440}
              // width={2560}
              layout='fill'
            />
          </div>
          <div className='embla__slide'>
            <Image
              src='/court1440p.webp'
              alt='Gården till nyproduktionsprojektet Aurora'
              // height={1440}
              // width={2560}
              layout='fill'
            />
          </div>
        </div>
        <div className='embla__overlay'>
          <h1 className='embla__overlay--title'>Nyproduktionsprojekt Aurora</h1>
          <h2 className='embla__overlay--sub-title'>
            Gamla anor möter morgondagens vanor
          </h2>
          <Link href='/properties' passHref>
            <button className='embla__overlay--btn'>Läs mer</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexCarousel
