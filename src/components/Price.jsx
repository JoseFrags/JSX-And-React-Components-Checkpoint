import React from 'react'
import product from '../store/product'

const Price = () => {
  return (
    <h4>{product.price}$</h4>
  )
}

export default Price