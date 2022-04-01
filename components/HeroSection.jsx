import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section__text'>
        <h1>Fastigheter med hög standard i centrala lägen</h1>
      </div>
      <div className='hero-section__image-container'>
        <div className='hero-section__image-container--image'>
          <Image src='/fastigheter_hero.jpg' layout='fill' alt='Birdseye view of property in Ystad' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
