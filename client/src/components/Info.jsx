import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Info() {
    return (
        <div>
            <div className='lg:flex lg:flex-col lg:items-center lg:bg-gray-400 lg:py-2 lg:px-6 lg:ml-28 lg:rounded-3xl'>
                <p className='lg:text-4xl lg:italic lg:font-bold lg:py-6'>
                    Software Developer</p>
                <img className='lg:w-3/6 lg:rounded-full' src='https://i.imgur.com/fB1J9Lg.png' alt='profile picture' />
                <div className='text-xl font-bold italic py-4'>
                    <p className='lg:text-3xl lg:py-4'>
                        Babak Bayati</p>
                    <p>bbkbyti@outlook.com</p>
                    <p>(512)-743-6060</p>
                    <p>Austin, TX</p>
                    <div className='lg:flex lg:justify-center lg:my-3'>

                        <div className=" lg:flex  lg:transition lg:duration-500 lg:hover:opacity-70 lg:transform lg:ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110">
                            <a href="https://github.com/bbkbyti" target="_blank" rel="noreferrer">
                                <FaGithub size={30} />
                            </a>
                        </div>

                        <div className=" lg:flex  lg:transition lg:duration-500 lg:hover:opacity-70 lg:transform lg:ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110">
                            <a href="https://www.linkedin.com/in/babak-bayati-8bb990202" target="_blank" rel="noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
