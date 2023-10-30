import React from 'react'
import { useSelector } from 'react-redux'

const selectData = (state)=>state.product
const data = useSelector(selectData)
console.log(data);
const Card = () => {
  return (
    <div className='card'>
        <img 
        className='product-img'
        src=''
        alt='Card product'
        />
        <h2>Electric bike</h2>
        <p className='price'>{price}</p>
        <p>
        <button>Add to Cart</button>
        </p>
    </div>
  )
}

export default Card