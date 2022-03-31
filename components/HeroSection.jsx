import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='hero_section'>
      <div className='hero_section__text'>
        <h1>Fastigheter med hög standard i centrala lägen</h1>
      </div>
      <div className='hero_section__image_container'>
        <div className='hero_section__image_container--image'>
          <Image src='/fastigheter_hero.jpg' layout='fill' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
