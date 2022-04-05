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
            as='img/svg'
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
            <p>Box 20, 239 21 Skanör</p>
          </div>
        </div>
      </div>
      <p className='copy-right'>COPYRIGHT 2022 TIMOTUZ HOLDING AB</p>
    </div>
  )
}

export default Footer
