import React from 'react'
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
//

export default function Info() {
    return (
        <div>
            <div className='lg:flex lg:flex-col lg:items-center lg:bg-gray-400 lg:py-2 lg:px-6 lg:ml-28 lg:rounded-3xl bg-gray-300'>
                <p className='lg:text-4xl lg:italic lg:font-bold lg:py-6 text-2xl py-4 font-serif font-bold '>
                    Software Developer</p>
                <div className='flex justify-center'>
                    <img className='lg:w-3/6 lg:rounded-full w-3/6 flex rounded-full' src='https://i.imgur.com/fB1J9Lg.png' alt='profile picture' />
                </div>

                <div className='text-xl font-bold italic py-4'>
                    <p className='lg:text-3xl lg:py-4'>
                        Babak Bayati</p>
                    <p>bbkatx@gmail.com</p>
                    <p>(512)-743-6060</p>
                    <p>Austin, TX</p>
                    <div className='lg:flex lg:justify-center lg:my-3 flex justify-center'>

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
                    <div className='lg:flex lg:items-center lg:justify-center flex justify-center py-3  '>
                        <a href='https://drive.google.com/file/d/1OH-TUV48HQewgHd4OViARxOUjTjhJeLx/view?usp=sharing' target='_blank' rel='noreferrer'
                        >
                            <FaRegFilePdf className=' lg:transition lg:duration-500 lg:hover:opacity-70 lg:transform lg:ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110' size={30} />
                        </a>
                        <p className='lg:mx-1'
                        >Resume</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
