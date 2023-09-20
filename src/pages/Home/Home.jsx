import React from 'react'
import { HomeWrapper } from './HomeStyles'
import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/AboutUs/AboutUs'
import Contact from '../../components/Contact/Contact'
import Categorias from '../../components/Categorias/Categorias'
import Productos from '../../components/Productos/Productos'



const Home = () => {
  return (
    <HomeWrapper>
        <Hero/>
        <AboutUs/>
        <Categorias/>
        <Productos/>
        <Contact/>
    </HomeWrapper>
  )
}

export default Home