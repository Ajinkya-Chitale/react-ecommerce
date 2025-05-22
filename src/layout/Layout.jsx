import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../Components/Header'

const Layout = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout