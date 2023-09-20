import React from 'react'
import { HeroContainerImg, HeroContainerStyled, HeroContainerText } from './HeroStyles'
import  img_Security  from '../Images/img_Security.jpg'
const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroContainerText>
        <h1>My Security</h1>
        <p>Seguridad para tu Hogar o Empresa</p>
        </HeroContainerText>
        <HeroContainerImg>
        <img src= 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312451/MySecurity/img_Security_ptua7w.jpg' alt='img_Security'/> 
        </HeroContainerImg>
    </HeroContainerStyled>
  )
}

export default Hero