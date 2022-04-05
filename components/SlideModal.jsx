import PropertiesSlider from './PropertiesSlider'
import properties_dynamic from '../public/properties_dynamic'

const SlideModal = ({ setIsOpen, index }) => {
  const currentSelection = Number(index.id)
  return (
    <div className='modal'>
      <div className='modal__content'>
        <PropertiesSlider
          image={properties_dynamic?.[currentSelection].images}
        />
      </div>
    </div>
  )
}

export default SlideModal
