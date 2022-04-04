import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndexGrid = () => {
  return (
    <div className='grid-container'>
      <div className='index-grid'>
        <div className='kontakt'>
          <Image
            src='/kontakt-grid.webp'
            height={248}
            width={346}
            alt='Innegård på nyproduktion Aurora'
            layout='responsive'
          />
          <div className='kontakt__content'>
            <p>Söker du bostad?</p>
            <Link href='/kontakta-oss' passHref>
              <button className='btn'>Kontakta oss</button>
            </Link>
          </div>
        </div>
        <div className='aurora'>
          <Image
            src='/court-grid.webp'
            height={574}
            width={346}
            alt='Innegård på nyproduktion Aurora'
            layout='responsive'
          />
          <div className='aurora__content'>
            <p className='aurora__content--top-text'>Nyproduktion</p>
            <p className='aurora__content--bot-text'>Aurora</p>
          </div>
        </div>
        <div className='ystad'>
          <Image
            src='/ystad-grid.webp'
            height={248}
            width={346}
            alt='Innegård på nyproduktion Aurora'
            layout='responsive'
          />
          <div className='ystad__content'>
            <p className='ystad__content--top-text'>Ystad</p>
          </div>
        </div>
        <div className='malmo'>
          <Image
            src='/limhamn-grid.webp'
            height={248}
            width={346}
            alt='Innegård på nyproduktion Aurora'
            layout='responsive'
          />
          <div className='malmo__content'>
            <p className='malmo__content--top-text'>Malmö/Limhamn</p>
          </div>
        </div>
        <div className='fastigheter'>
          <div className='fastigheter__content'>
            <Link href='/fastigheter' passHref>
              <button className='btn'>Visa flera fastigheter</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexGrid
