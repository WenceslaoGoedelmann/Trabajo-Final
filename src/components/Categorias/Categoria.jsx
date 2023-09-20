import React from 'react'
import { CategoriaContainerStyled } from './CategoriesStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice';


const Categoria = ({ title , category}) => {

  const selectedCategory = useSelector(state => state.categories.selectedCategory );

  const dispatch = useDispatch();
  return (
    <CategoriaContainerStyled
      selected={category === selectedCategory}
      onClick={ () => dispatch(selectCategory(category)) }
      whileTap={{ scale: 0.95 }}
    >
        <h2>{title}</h2>
    </CategoriaContainerStyled>
  )
}

export default Categoria