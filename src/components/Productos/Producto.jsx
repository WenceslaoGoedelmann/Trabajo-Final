import React from 'react'
import { BtnAgregar, CardProductoBot, CardProductoInfo, CardProductoMid, CardProductoTop, ProductoContainerStyled } from './ProdutosStyles'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'

const Producto = ({title,price,img, id}) => {
  const dispatch = useDispatch()
  return (
    <ProductoContainerStyled>
        <CardProductoTop>
            <h3>{title}</h3>
        </CardProductoTop>
        <img src={img} alt={title}/>
        <CardProductoInfo>
        <CardProductoMid>
            <p>Precio:</p>
            <span>${price}</span>
        </CardProductoMid>
        <CardProductoBot>
            <BtnAgregar onClick={()=>
             dispatch(addToCart({title,price,img, id}))
            }>Agregar al Carrito</BtnAgregar>
        </CardProductoBot>
        </CardProductoInfo>
    </ProductoContainerStyled>  
  )
}

export default Producto