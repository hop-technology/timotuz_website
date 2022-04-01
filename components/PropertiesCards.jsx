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
              <p>
                {property.description
                  ? property.description
                  : property.description_text?.map((text, index) => {
                      return (
                        <>
                          <p>{text.description_1}</p>
                          <br />
                          <p>{text.description_2}</p>
                          <br />
                          <p>{text.description_3}</p>
                          <br />
                          <p>{text.description_4}</p>
                        </>
                      )
                    })}
              </p>
            </div>
            <div className='properties-cards__info'>
              <p>
                <b>Adress: </b>
                {property.address}
              </p>
            </div>
            <p>
              <b>Typ: </b>
              {property.type}
            </p>
            {property.housing ? (
              <p>
                <b>Bostäder: </b>
                {property.housing}
              </p>
            ) : (
              ''
            )}
            {property.boa ? (
              <p>
                <b>Boa: </b>
                {property.boa}
              </p>
            ) : (
              ''
            )}

            {property.premises ? (
              <p>
                <b>Lokaler: </b>
                {property.premises}
              </p>
            ) : (
              ''
            )}

            {property.loa ? (
              <p>
                <b>LOA: </b>
                {property.loa}
              </p>
            ) : (
              ''
            )}

            {property.lager ? (
              <p>
                <b>Lager: </b>
                {property.lager}
              </p>
            ) : (
              ''
            )}
            {property.kontor ? (
              <p>
                <b>Kontor: </b>
                {property.kontor}
              </p>
            ) : (
              ''
            )}
            {property.parking ? (
              <p>
                <b>Parkering: </b>
                {property.parking}
              </p>
            ) : (
              ''
            )}
            <br />
            {property.foradling ? (
              <p>
                <b>Förädling/exploatering: </b>
                {property.foradling}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </>
    )
  })
}

export default PropertiesCards
