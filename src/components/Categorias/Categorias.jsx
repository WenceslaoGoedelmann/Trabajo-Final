import React from 'react'
import { CategoriasContainerStyled } from './CategoriesStyles'

import Categoria from './Categoria'
import { Categories } from '../../data/Categories'
import { useSelector } from 'react-redux' 

const Categorias = () => {
   const categories = useSelector(state => state.categories.categories) 

  return (
    <>
    <CategoriasContainerStyled>
        {categories.map(categoria => (
            <Categoria key={categoria.id}{...categoria}/>
        ))}

    </CategoriasContainerStyled>
  
    </>
  )
}

export default Categorias