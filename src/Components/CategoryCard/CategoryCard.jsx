import React from 'react'
import PropTypes from 'prop-types'

const CategoryCard = ({id,title,name, price, image, description, category, rating, stock}) => {
  return (
    <div className="shadow-3xl rounded-md flex flex-col items-center  m-1 p-4">
      <div className=" " id="product-photo">
          <img src={image} alt={name} className=" min-w-[20vw] object-cover " />
      </div>
      <div className=" mt-2  cursor-pointer text-sm  text-zinc-600" id="card-title">
          {name}
      </div>
    </div>
  )
}

CategoryCard.propTypes = {}

export default CategoryCard