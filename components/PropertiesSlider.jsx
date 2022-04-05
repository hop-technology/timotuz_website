import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from './SlideshowButton'

const PropertiesSlider = ({ image, setIsOpen, imageId, currentSelection }) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(true)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)
  const [fullScreenBtnEnabled, setFullScreenBtnEnabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  let slideShow = image?.map((image, index) => {
    return (
      <div className='embla__slide' key={index}>
        <a id={imageId} onClick={(event) => handleClick(event)}>
          <button>
            <Image
              src={image.photo.src}
              width={2000}
              height={1500}
              alt={image.alt}
              priority
            />
          </button>
        </a>
      </div>
    )
  })

  const handleClick = (event) => {
    event.preventDefault()
    setIsOpen(true)
    currentSelection(event?.currentTarget.id)
  }

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>{slideShow}</div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            name={`current image is ${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PropertiesSlider
