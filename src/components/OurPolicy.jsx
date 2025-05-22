import React from 'react'
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] gap-14 my-10'>
            <div className='text-center'>
                <RiExchangeFundsFill className='text-5xl mx-auto mb-5' />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer hassle free exchange policy</p>
            </div>
            <div className='text-center'>
                <MdPolicy className='text-5xl mx-auto mb-5' />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-400'>We provide 7 days free return policy</p>
            </div>
            <div className='text-center'>
                <FaHeadphones className='text-5xl mx-auto mb-5' />
                <p className='font-semibold'>Best customer support</p>
                <p className='text-gray-400'>we provide 24/7 customer support</p>
            </div>
        </div>
    )
}

export default OurPolicy