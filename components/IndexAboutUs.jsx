import Image from 'next/image'
import Link from 'next/link'

const IndexAboutUs = () => {
  return (
    <div className='index-about-us'>
      <div className='index-about-us__image-container'>
        <div className='index-about-us__image-container--image'>
          <Image
            src='/people_2.webp'
            alt='couple in living room'
            layout='fill'
            priority
          />
        </div>
        <div className='image-overlay'>
          <h1>Om oss</h1>
        </div>
      </div>
      <div className='index-about-us__text-container'>
        <div className='index-about-us__text-container--text'>
          <h1>Om oss</h1>
          <p>
            Timotuz har varit verksamt inom fastighetsbranschen sedan 2014.
            <br></br> <br></br> Vi förvärvar, förädlar, nyproducerar,
            exploaterar, äger och förvaltar hyresbostäder i Södra Sverige.
            Strategin är att i städer med tillväxtpotential förvärva befintliga
            bostadsfastigheter liksom mark för nyproduktion samt strategiskt
            belägna lager och logistikfastigheter.
          </p>
          <Link href='/om-oss' passHref>
            <a>
              <button className='btn'>Mer om oss</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexAboutUs
