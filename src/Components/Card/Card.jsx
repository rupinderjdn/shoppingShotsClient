import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({id,title, price, image, description, category, rating, stock})=>{

    console.log();

    return (
        <div className="shadow-3xl rounded-md flex flex-col items-start max-w-[20vw] m-1 p-4">
            <div className=" " id="product-photo">
                <img src={image} alt={title} className="object-cover " />
            </div>
            <div id="itemDetails" className='flex flex-col items-start mt-4'>
            <div className="  text-sm  text-zinc-600" id="card-title">
                {category}
            </div>
            <div className=" my-2 font-bold text-left" id="card-title">
                {title}
            </div>
            <div id="card-description" className='my-1'>
              ₹{price}
            </div>
            </div>

        </div>
    )
}