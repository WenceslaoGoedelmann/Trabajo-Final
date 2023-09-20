import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Btn, PageNotFoundWrapper } from './PageNotFoundStyles';

const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <PageNotFoundWrapper>
        <h2>404 Error</h2>
        <h3>Algo salio mal</h3>
        <Btn onClick={() => navigate('/')}>Volver al inicio</Btn>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound