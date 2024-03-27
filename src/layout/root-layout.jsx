import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container } from 'react-bootstrap'

const RootLayout = () => {
  return (
    <div className='d-flex flex-column gap-4  justify-content-between h-100'>
        <Header/>
        <Container className='flex-grow-1'>
          <Outlet/>
        </Container>
        
        <Footer/>
    </div>
  )
}

export default RootLayout