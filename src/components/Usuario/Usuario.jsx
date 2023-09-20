import React from 'react'
import { BtnLogout, CardContact,  InfoContainer,  SaludoContainer, UsuarioContainer } from './UsuarioStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Usuario = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    const navigate = useNavigate();
    return (
    <UsuarioContainer>
        <SaludoContainer>
            <h2>Hola! {currentUser.nombre}</h2>
        
        <BtnLogout onClick={() => {
            dispatch(setCurrentUser(null));
            navigate('/')
        }}
        >Cerrar Sesion</BtnLogout> 
        </SaludoContainer>
        <CardContact>
            <h2>Informacion de contacto</h2>
            <InfoContainer>
            <p>Nombre y apellido: <span>{currentUser.nombre}</span></p>
            <p>Email: <span>{currentUser.email}</span></p>
            <p>Telefono: <span>{currentUser.cellphone}</span></p>
            <p>Ciudad: <span> {currentUser.location}</span></p>
            <p>Direccion: <span>{currentUser.address}</span></p>
            </InfoContainer>
        </CardContact>
    </UsuarioContainer>
  )
}

export default Usuario