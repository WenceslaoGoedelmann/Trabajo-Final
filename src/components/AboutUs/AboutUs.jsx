import React from 'react'
import { AboutUsContainerImg, AboutUsContainerStyled, AboutUsContainerText } from './AboutUsStyles'
import  img_X28  from '../Images/img_X28.png'
const AboutUs = () => {
  return (
    <AboutUsContainerStyled>
        <AboutUsContainerImg>
            <img src= 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_X28_opwdqj.png' alt='img_X28'/>
        </AboutUsContainerImg>
        <AboutUsContainerText>
            <h2>#MySecurity</h2>
            <p>Somos representantes oficiales de sistemas electrónicos de seguridad y sistemas de videos X-28.</p>  
            <p>ENVIOS GRATIS A PARTIR DE $10.000!!!</p>
        </AboutUsContainerText>
    </AboutUsContainerStyled>
  )
}

export default AboutUs