import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaRegFilePdf } from "react-icons/fa";


export default function Navbar() {
    return (
        <div className=" py-8 font-serif text-white bg-gray-700 flex justify-evenly" >

            <div>
                <Link to='/'>
                    <FaHome size={25} />
                </Link>
            </div>

            <div className='text-xl'>
                <a href='#projects'>Projects</a>
            </div>
            <div className='lg:flex lg:items-center'>
                <a href='https://drive.google.com/file/d/1YpKOCdA300ttHNqsgH1fUr6yjVkq5TtK/view?usp=sharing' target='_blank' rel='noreferrer'>
                    <FaRegFilePdf size={25} />
                </a>

            </div>
        </div>
    )
}
