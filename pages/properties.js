import HeroSection from '../components/HeroSection'
import PropertiesCards from '../components/PropertiesCards'
import fastigheter_hero from '../public/fastigheter-hero-1920.webp'

const properties = () => {
  return (
    <>
      <HeroSection
        image={fastigheter_hero}
        alt={'Birdseye view of property in Ystad'}
      />
      <div className='properties'>
        <PropertiesCards />
      </div>
    </>
  )
}

export default properties
