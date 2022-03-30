import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>LOGO</div>
      <div className="navbar__links">
        <Link href='#' passHref>
          <a className='navbar__links--link'>Hem</a>
        </Link>
        <Link href='/properties' passHref>
          <a className='navbar__links--link'>Fastigheter</a>
        </Link>
        <Link href='/aboutUs' passHref>
          <a className='navbar__links--link'>Om oss</a>
        </Link>
        <Link href='/contactUs' passHref>
          <a className='navbar__links--link'>Kontakt</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
