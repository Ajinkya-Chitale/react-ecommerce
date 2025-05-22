import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            {/* Desktop Menu */}
            <ul className='desktopMenu hidden sm:flex gap-5 text-sm text-gray-700 uppercase'>
                <li>
                    <NavLink className='flex flex-col items-center gap-1' to='/'>
                        <p>home</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex flex-col items-center gap-1' to='/collection'>
                        <p>collection</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex flex-col items-center gap-1' to='/about'>
                        <p>about</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex flex-col items-center gap-1' to='/contact'>
                        <p>contact</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar
