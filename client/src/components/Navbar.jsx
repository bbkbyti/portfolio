import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


export default function Navbar() {
    return (
        <div className=" py-8 font-serif text-white bg-gray-700 flex justify-evenly" >

            <div>
                <Link to='/'>
                <FaHome size={25} />
                </Link>
            </div>

            <div>
                <p>Projects</p>
            </div>
            <div>
                <Link to='/resume'>
                <p>Resume</p>
                </Link>
                
            </div>
        </div>
    )
}
