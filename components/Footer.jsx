import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <div className='content__image'>
          <Image
            src='/logo-with-text.svg'
            height={100}
            width={250}
            alt='Timotuz logo'
            priority
          />
        </div>
        <div className='content__contact'>
          <div className='content__contact--item'>
            <p>040 685 94 00</p>
          </div>
          <div className='content__contact--item'>
            <p>info@timotuz.com</p>
          </div>
          <div className='content__contact--item'>
            <p>Mellangatan 58, 239 30 Skanör</p>
          </div>
        </div>
      </div>
      <div>
        <div className='footer-link'>
          <a
            href='https://www.facebook.com/tzfastigheter'
            target='_blank'
            rel='noreferrer'>
            <Image
              src='/facebook.png'
              height={40}
              width={40}
              alt='facebook link'
            />
          </a>
          <a
            href='https://www.linkedin.com/company/timotuz/'
            target='_blank'
            rel='noreferrer'>
            <Image
              src='/linkedin.png'
              height={40}
              width={40}
              alt='Linkedin'
            />
          </a>
          <a
            href='https://www.instagram.com/timotuzfastigheter/'
            target='_blank'
            rel='noreferrer'>
            <Image
              src='/instagram.png'
              height={40}
              width={40}
              alt='instagram'
            />
          </a>
          <p className='copy-right'>COPYRIGHT 2022 TIMOTUZ HOLDING AB</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
