import Image from 'next/image'

const HeroSection = ({ image, alt, text }) => {
  return (
    <div className='hero-section'>
      {text.tag_line ? (
        <div className='hero-section__text'>
          <h1>{text.tag_line}</h1>
        </div>
      ) : (
        <div className='hero-section__contact-us'>
          <div>
            <h2>{text[0].number}</h2>
          </div>
          <span></span>
          <div>
            <h2>{text[0].email}</h2>
          </div>
        </div>
      )}

      <div className='hero-section__image-container'>
        <div className='hero-section__image-container--image'>
          <Image src={image} layout='fill' alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
