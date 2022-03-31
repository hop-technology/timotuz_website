import properties_dynamic from '../public/properties_dynamic'
import PropertiesSlider from './PropertiesSlider'

const PropertiesCards = () => {
  return properties_dynamic.map((property, index) => {
    return (
      <>
        <div className='properties-cards'>
          <div className='properties-cards__image-slider'>
            <PropertiesSlider image={property.images} />
          </div>
          <div key={property.id} className='properties-cards__text'>
            <div>
              <h3>{property.district}</h3>
            </div>
            <div>
              <h2>{property.name}</h2>
            </div>
            <div>
              <p>{property.description}</p>
            </div>
            <div className='properties-cards__info'>
              <h4>Adress:</h4>
              <p>{property.address}</p>
            </div>
            {property.type}
            <br />
            {property.housing}
            <br />
            {property.boa} {property.premises ? property.premises : ''}
            <br />
            {property.loa ? property.loa : ''}
            <br />
            {property.parking ? property.parking : ''}
            <br />
            {property.foradling ? property.foradling : ''}
          </div>
        </div>
      </>
    )
  })
}

export default PropertiesCards
