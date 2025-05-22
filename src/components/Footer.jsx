import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img className='w-32 mb-5' src="./src/assets/logo.png" alt="logo" />
                    <p className='text-gray-600 w-full md:w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <p className='uppercase font-medium text-xl mb-5'>company</p>
                    <ul className='text-gray-600 flex flex-col gap-1'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='uppercase font-medium text-xl mb-5'>get in touch</p>
                    <ul className='text-gray-600 flex flex-col gap-1'>
                        <li>+1-000-000-0000</li>
                        <li>ajinkyachitale89@gmail.com</li>
                        <li><NavLink target='_blank' to="https://www.linkedin.com/in/ajinkya-chitale/">LinkedIn</NavLink></li>
                    </ul>
                </div>
            </div>
            <hr className='text-gray-300' />
            <div>
                <p className='py-5 text-sm text-center'>Copyright 2025 - All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
