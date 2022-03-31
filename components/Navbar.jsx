import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import MobNav from './MobNav'

const Navbar = () => {
  const [mobNav, setMobNav] = useState(false)
  const Toggle = () => setMobNav(!mobNav)

  const router = useRouter()
  const location = router.asPath
  const homeActive = ['/'].includes(location) ? 'active' : ''
  const propertiesActive = ['/properties'].includes(location) ? 'active' : ''
  const aboutActive = ['/about-us'].includes(location) ? 'active' : ''
  const contactActive = ['/contact-us'].includes(location) ? 'active' : ''

  return (
    <div className='navbar'>
      <div className='navbar__image'>
        <Link href='/' passHref>
          <a>
            <Image
              priority
              placeholder='empty'
              src='/logo-with-text.svg'
              height={121}
              width={388}
              as='img/svg'
              alt='Timotuz logo'
            />
          </a>
        </Link>
      </div>
      <button className='navbar__burger' onClick={() => Toggle()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <MobNav show={mobNav} close={Toggle} />

      <div className='navbar__links'>
        <div className='navbar__links--link'>
          <Link href='/' passHref>
            <a className={`navbar__links--a ${homeActive}`}>Hem</a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/properties' passHref>
            <a className={`navbar__links--a ${propertiesActive}`}>
              Fastigheter
            </a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/about-us' passHref>
            <a className={`navbar__links--a ${aboutActive}`}>Om oss</a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/contact-us' passHref>
            <a className={`navbar__links--a ${contactActive}`}>Kontakt</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
