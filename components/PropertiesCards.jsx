import properties_dynamic from '../public/properties_dynamic'

const PropertiesCards = () => {
  return properties_dynamic.map((property, index) => {
    return (
      <>
        <div>
          <div key={property.id} className='properties-cards'>
            <div>{property.district}</div>
            <div>{property.name}</div>
            <div>{property.description}</div>
            <div>{property.address}</div>
            <div>{property.type}</div>
            <div>{property.housing}</div>
            <div>{property.boa}</div>
            <div>{property.premises ? property.premises : ''}</div>
            <div>{property.loa ? property.loa : ''}</div>
            <div>{property.parking ? property.parking : ''}</div>
            <div>{property.foradling ? property.foradling : ''}</div>
          </div>
        </div>
      </>
    )
  })
}

export default PropertiesCards
