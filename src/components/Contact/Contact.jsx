import React from 'react'
import {  ContactContainerStyled, ContactInfo, LinksRedes, Redes } from './ContactStyled'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import  Instagram  from '../Images/Instagram-icon.png'
import  Facebook  from '../Images/Facebook-icon.png'

const Contact = () => {
  return (
    <ContactContainerStyled>
      <ContactInfo>
        <b>Contacto:</b>
        <span>
        <FaPhone />
        <Link to='#'> +54 341 3092659</Link>
        </span>
        <span>
        <FaEnvelope/>
        <Link to='#'> info.mysecurity@gmail.com</Link>
        </span>
      </ContactInfo>
      <Redes>
        <b>Nuestras Redes:</b>
        <LinksRedes>
          <Link to='https://www.instagram.com/'> <img src= 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312457/MySecurity/Instagram-icon_jl3k8v.png' alt='Instagram'/></Link>
          <Link to='https://www.facebook.com/'> <img src= 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/Facebook-icon_e5gme7.png' alt='Facebook'/></Link>
        </LinksRedes>
      </Redes>

    </ContactContainerStyled>
  )
}

export default Contact