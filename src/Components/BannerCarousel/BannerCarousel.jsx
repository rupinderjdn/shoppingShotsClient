import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'


const BannerCarousel = ({sectionClassName,sectionTitle,cardsData}) => {
  
  return (
    <div className={`${sectionClassName} w-full  p-2 `}>
        {/*  this should be config driven */}
        <div id="BannerHeading" className='flex flex-col justify-center text-4xl my-2 text-slate-700 caveat  underline-offset-8 underline '>{sectionTitle}</div>
        <div id="CarouselContainer" className='mx-10 flex flex-row items-center justify-between'>
          <div className=' cursor-pointer'><FontAwesomeIcon icon={faLessThan} /> </div>
            <div id="CarouselItems" className=' flex flex-row justify-center flex-wrap'>
              {cardsData.map((item)=>{
                const ComponentToRender = item.component;
                // TODO below props passing should be generic
                return (
                  <div key={item.id} className="CarouselItem">
                    <ComponentToRender id={item.id} title={item.title} price={item.price} image={item.image} description={item.description} name={item.name} category={item.category} rating={item.rating} reviews={item.reviews} stock={item.stock}/>
                  </div>
                )
              })}
            </div>
          <div className=' cursor-pointer'><FontAwesomeIcon icon={faGreaterThan} /></div>
        </div>


    </div>
  )
}

BannerCarousel.propTypes = {
  sectionClassName: PropTypes.string,
  sectionTitle: PropTypes.string,
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BannerCarousel