import Link from 'next/link'
import Image from 'next/image'

const MobNav = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className='mob-nav-bg' onClick={() => close()}>
          <div className='mob-nav' onClick={(e) => e.stopPropagation()}>
            <div className='mob-nav__links'>
              <div className='mob-nav__links--link'>
                <Link href='/' passHref>
                  <a className='mob-nav__links--a' onClick={() => close()}>Hem</a>
                </Link>
              </div>
              <div className='mob-nav__links--link'>
                <Link href='/properties' passHref>
                  <a className='mob-nav__links--a' onClick={() => close()}>Fastigheter</a>
                </Link>
              </div>
              <div className='mob-nav__links--link'>
                <Link href='/aboutUs' passHref>
                  <a className='mob-nav__links--a' onClick={() => close()}>Om oss</a>
                </Link>
              </div>
              <div className='mob-nav__links--link'>
                <Link href='/contactUs' passHref>
                  <a className='mob-nav__links--a' onClick={() => close()}>Kontakt</a>
                </Link>
              </div>
              <div>
                <div className='mob-nav__links--image'>
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
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MobNav
