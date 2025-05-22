import React from 'react'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'
import { useDispatch, useSelector } from 'react-redux'
import { openNavbar } from '../Features/navbar/navbarSlice'

const Header = () => {
    const isOpen = useSelector((state) => state.navbar.isOpen);
    const dispatch = useDispatch();

    // Function to open mobile navigation on click of menu icon
    const handleToggle = () => {
        dispatch(openNavbar());
    }

    return (
        <div className='flex items-center justify-between font-medium py-5'>
            <img className='w-36' src='./src/assets/logo.png' alt='logo' />
            <Navbar />
            {isOpen && <MobileMenu />}
            <div className='flex items-center gap-6'>
                <img className='w-5 cursor-pointer' src="./src/assets/search_icon.png" alt="search icon" />
                <img className='w-5 cursor-pointer' src="./src/assets/profile_icon.png" alt="profile icon" />
                <div className='relative inline-flex'>
                    <img className='w-5 cursor-pointer' src="./src/assets/cart_icon.png" alt="cart icon" />
                    <p className='absolute w-4 right-[-5px] bottom-[-5px] leading-4 aspect-square bg-black text-white text-[8px] rounded-full flex items-center justify-center'>0</p>
                </div>
                <div className='cursor-pointer'>
                    <img className='w-5 sm:hidden' src="./src/assets/menu_icon.png" alt="menu icon" onClick={handleToggle} />
                </div>
            </div>
        </div>
    )
}

export default Header
