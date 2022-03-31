import HeroSection from '../components/HeroSection'
import PropertiesCards from '../components/PropertiesCards'

const properties = () => {
  return (
    <>
      <HeroSection />
      <div className='properties'>
        <div>
          <PropertiesCards />
        </div>
      </div>
    </>
  )
}

export default properties
