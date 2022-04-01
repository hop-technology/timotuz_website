import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IndexCarousel = () => {
  return (
    <div className='index-carousel'>
      <div className='index-carousel__large'>
        <div className='image-container'>
          <Image
            src='/street1440p.webp'
            alt='Gatuvy nyproduktionsprojektet Aurora'
            height={1080}
            width={1920}
            layout='responsive'
          />
        </div>
        <div className='image-container'>
          <Image
            src='/court1440p.webp'
            alt='Gården till nyproduktionsprojektet Aurora'
            height={1080}
            width={1920}
            layout='responsive'
          />
        </div>
      </div>
      <div className='index-carousel__small'>
        <div className='image-container'>
          <Image
            src='/street1440p.webp'
            alt='Gatuvy nyproduktionsprojektet Aurora'
            height={500}
            width={700}
            layout='responsive'
          />
        </div>
        <div className='image-container'>
          <Image
            src='/court1440p.webp'
            alt='Gården till nyproduktionsprojektet Aurora'
            height={500}
            width={700}
            layout='responsive'
          />
        </div>
      </div>

      <div className='index-carousel__overlay'>
        <div className='index-carousel__overlay--content'>
          <h1 className='title'>Nyproduktionsprojekt Aurora</h1>
          <h2 className='sub-title'>Gamla anor möter morgondagens vanor</h2>
          <Link href='/properties' passHref>
            <button className='btn'>Läs mer</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexCarousel