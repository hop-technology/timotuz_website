import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobNav from './MobNav'

const Navbar = () => {
  const [mobNav, setMobNav] = useState(false)
  const Toggle = () => setMobNav(!mobNav)

  return (
    <div className='navbar'>
      <div className='navbar__image'>
        <Link href='/' passHref>
          <Image
            src='/logo-with-text.svg'
            height={121}
            width={388}
            as='img/svg'
            alt='Timotuz logo'
          />
        </Link>
      </div>
      <button className='navbar__burger' onClick={() => Toggle()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <MobNav show={mobNav} title='My Mobile nav' close={Toggle} />

      <div className='navbar__links'>
        <div className='navbar__links--link'>
          <Link href='/' passHref>
            <a className='navbar__links--a'>Hem</a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/properties' passHref>
            <a className='navbar__links--a'>Fastigheter</a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/aboutUs' passHref>
            <a className='navbar__links--a'>Om oss</a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/contactUs' passHref>
            <a className='navbar__links--a'>Kontakt</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar