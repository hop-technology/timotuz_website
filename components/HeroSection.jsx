import Image from 'next/image'

const HeroSection = ({image, alt}) => {
  return (
    <div className='hero-section'>
      <div className='hero-section__text'>
        <h1>Fastigheter med hög standard i centrala lägen</h1>
      </div>
      <div className='hero-section__image-container'>
        <div className='hero-section__image-container--image'>
          <Image src={image} layout='fill' alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
