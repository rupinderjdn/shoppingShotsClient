import React from 'react'
import PropTypes from 'prop-types'

const MainAdv = props => {
  return (
    <div id='mainAdv-container' className='flex flex-row p-24 px-40 justify-around'>
        <div id="mainAdv-Texts" className='w-1/2  items-start flex flex-col justify-between'>
            <div id="mainAdv-heading" className='my-2 text-left mainAdvHeading'>Hand-painted fridge magnets,wall hanging and much more gifting
            Terracotta</div>
            <div id="mainAdv-subheading" className='my-2 text-left font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti?</div>
            <div id="mainAdv-button" className='my-2  text-left'>
                <div className=' button-platform-main p-4  font-mono'>View Collection</div>
            </div>
        </div>
        <div id="mainAdvImage" className='w-1/2'>
            <div>
                
            </div>
        </div>
    </div>
  )
}

MainAdv.propTypes = {}

export default MainAdv