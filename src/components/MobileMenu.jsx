import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router'
import { closeNavbar } from '../Features/navbar/navbarSlice';

const MobileMenu = () => {
    const dispatch = useDispatch();

    const closeNavigationMenu = () => {
        dispatch(closeNavbar())
    }

    return (
        <ul className='mobileMenu sm:hidden flex flex-col absolute top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all w-full text-base text-gray-700 uppercase'>
            <li>
                <div className='flex items-center gap-3 p-3 border-b border-gray-300 cursor-pointer' onClick={closeNavigationMenu}>
                    <img className='h-4 rotate-180' src="./src/assets/dropdown_icon.png" alt="back icon" />
                    <p className='capitalize'>Back</p>
                </div>
            </li>
            <li>
                <NavLink className='flex flex-col border-b border-gray-300 py-2 pl-6' to='/' onClick={closeNavigationMenu}>
                    <p>home</p>
                </NavLink>
            </li>
            <li>
                <NavLink className='flex flex-col border-b border-gray-300 py-2 pl-6' to='/collection' onClick={closeNavigationMenu}>
                    <p>collection</p>
                </NavLink>
            </li>
            <li>
                <NavLink className='flex flex-col border-b border-gray-300 py-2 pl-6' to='/about' onClick={closeNavigationMenu}>
                    <p>about</p>
                </NavLink>
            </li>
            <li>
                <NavLink className='flex flex-col border-b border-gray-300 py-2 pl-6' to='/contact' onClick={closeNavigationMenu}>
                    <p>contact</p>
                </NavLink>
            </li>
        </ul>
    )
}

export default MobileMenu
