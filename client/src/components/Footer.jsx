import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className='font-serif text-white text-2xl py-6 bg-gray-700 flex justify-evenly'>
            <div className='py-6 flex justify-evenly'>
                <FaGithub className='mx-4' size={30} color='white' />
                <FaLinkedin size={30} color='white' />
                <h3 className='mx-12 text-white font-serif'>Ⓒ Babak Bayati 2021</h3>
            </div>
        </div>
    )
}
