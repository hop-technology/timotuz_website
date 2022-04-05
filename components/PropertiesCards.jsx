import properties_dynamic from '../public/properties_dynamic'
// import PropertiesSlider from './PropertiesSlider'
import ImageGallery from 'react-image-gallery'


const PropertiesCards = () => {
  return properties_dynamic.map((property, index) => {
    return (
      <div className='properties-cards' key={index}>
        <div className='properties-cards__image-slider'>
          <ImageGallery items={property.images} />
        </div>
        <div className='properties-cards__text'>
          <div>
            <h3>{property.district}</h3>
          </div>
          <div>
            <h2>{property.name}</h2>
          </div>
          <div>
            {property.description
              ? property.description
              : property.description_text?.map((text, index) => {
                  return (
                    <div key={index}>
                      <p>{text.description_1}</p>
                      <br />
                      <p>{text.description_2}</p>
                      <br />
                      <p>{text.description_3}</p>
                      <br />
                      <p>{text.description_4}</p>
                    </div>
                  )
                })}
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
          {property.button ? (
            <button>
              <a
                href='https://www.brfaurora.nu'
                target='_blank'
                rel='noreferrer'>
                <p>{property.button}</p>
              </a>
            </button>
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
    )
  })
}

export default PropertiesCards
