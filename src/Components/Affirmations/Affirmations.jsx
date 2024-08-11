import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faMapPin, faRotateLeft, faTruckFast } from '@fortawesome/free-solid-svg-icons'

const Affirmations = props => {
  return (
    <div className='flex flex-row justify-around p-4'>
        <div className='flex flex-col p-12 m-4 rounded-sm shadow-3xl'>
            <div className='font-platform-xl'><FontAwesomeIcon icon={faLock} /></div>
            <div className=' font-semibold font-platform-xl mb-4 '>Secure Payments</div>
            <p className=' text-sm text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officiis.</p>
        </div>
        <div className='flex flex-col p-12 m-4 rounded-sm shadow-3xl'>
            <div className='font-platform-xl'><FontAwesomeIcon icon={faTruckFast} /></div>
            <div className=' font-semibold font-platform-xl mb-4 '>Free Shiping</div>
            <p className=' text-sm text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officiis.</p>
        </div>
        <div className='flex flex-col p-12 m-4 rounded-sm shadow-3xl'>
            <div className='font-platform-xl'><FontAwesomeIcon icon={faRotateLeft} /></div>
            <div className=' font-semibold font-platform-xl mb-4 '>Easy Returns</div>
            <p className=' text-sm text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officiis.</p>
        </div>
        <div className='flex flex-col p-12 m-4 rounded-sm shadow-3xl'>
            <div className='font-platform-xl'><FontAwesomeIcon icon={faMapPin} /></div>
            <div className=' font-semibold font-platform-xl mb-4 '>Order Tracking</div>
            <p className=' text-sm text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officiis.</p>
        </div>
    </div>
  )
}

Affirmations.propTypes = {}

export default Affirmations