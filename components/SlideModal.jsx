import PropertiesSlider from './PropertiesSlider'
import properties_dynamic from '../public/properties_dynamic'

const SlideModal = ({ setIsOpen, index }) => {
  debugger
  const currentSelection = index
  return (
    <div className='modal'>
      <div className='modal__content'>
        <PropertiesSlider
         currentSelection={currentSelection}
          image={properties_dynamic?.[currentSelection].images}
        />
      </div>
    </div>
  )
}

export default SlideModal
