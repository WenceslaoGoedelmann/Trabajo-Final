import React from 'react'
import { Btn, ConfirmedBuyWrapper } from './ConfirmedBuyStyles'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ConfirmedBuy = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser)
  return (
    <ConfirmedBuyWrapper>
        <h1>Gracias <span>{currentUser.nombre} </span>por tu compra!</h1>
        <h3>Recibiras un email a <span>{currentUser.email} </span>cuado tu pedido sea enviado.</h3>
        <Btn onClick={() => navigate('/')}>Volver al inicio</Btn>
    </ConfirmedBuyWrapper>
  )
}

export default ConfirmedBuy