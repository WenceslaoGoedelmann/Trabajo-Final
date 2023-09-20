import React from 'react'
import { ItemCant, ItemPrecio, ItemTitulo, ProductCheckoutContainer } from './ProductsCheckoutStyles'

const ProductCheckoutCard = ({ title,price,img, quantity}) => {
  return (
    <ProductCheckoutContainer>
        <img src= {img} alt={title}/> 
        <ItemTitulo>{title}</ItemTitulo>
        <ItemCant>{quantity}</ItemCant>
        <ItemPrecio>${price}</ItemPrecio>
    </ProductCheckoutContainer>
  )
}

export default ProductCheckoutCard