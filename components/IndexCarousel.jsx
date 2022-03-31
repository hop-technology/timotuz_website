import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const IndexCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        <div className='embla__slide'>
          <Image
            src='/street1440p.webp'
            alt='couple in living room'
            height={1440}
            width={2560}
          />
        </div>
        <div className='embla__slide'>
          <Image
            src='/court1440p.webp'
            alt='couple in living room'
            height={1440}
            width={2560}
          />
        </div>
      </div>
    </div>
  )
}

export default IndexCarousel
