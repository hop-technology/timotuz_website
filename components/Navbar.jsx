import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar'>
      <input type='checkbox' id='burger' />
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

      <div className='navbar__burger'>
        <label htmlFor='burger'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
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
        <div className='navbar__links--image'>
          <Image
            src='/logo.webp'
            height={446}
            width={392}
            as='img/svg'
            alt='Timotuz logo'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
