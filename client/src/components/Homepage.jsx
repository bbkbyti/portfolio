import React from 'react'
import { FaReact } from "react-icons/fa";
import { DiRuby, DiMongodb, } from "react-icons/di";
import { SiRails, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";


export default function Homepage() {
    return (
        <div className=' min-h-screen font-serif '>
            <div className='bg-blue-100'>
                <h1 className='text-xl py-8 mx-48 font-bold italic '>Supportive and communicative Junior Developer with a background in customer service and management.
                    Having moved to three different countries during childhood, Possess exceptional problem-solving skills,
                    a knack for adaptability, and a strong sense of ethics. These traits blend seamlessly with ability to facilitate
                    and continuous need for self-improvement to form the basis of work style.
                </h1>
            </div>

            <div className=' min-h-screen flex flex-col'>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl italic font-bold py-6'>
                        Software Developer</p>
                    <img className='w-1/6 rounded-full' src='https://i.imgur.com/fB1J9Lg.png' alt='profile picture' />
                    <div className='text-xl font-bold italic py-4'>
                        <p>Babak Bayati</p>
                        <p>bbkbyti@outlook.com</p>
                        <p>(512)-743-6060</p>
                        <p>Austin, TX</p>
                    </div>

                </div>
                <div className='lg:bg-gray-200 py-6 '>
                    <h2 className='lg:text-4xl lg:italic lg:font-bold lg:flex lg:justify-center pb-6'>
                        Skills</h2>
                    <div className='lg:text-xl lg:font-bold lg:italic lg:py-3 lg:flex lg:justify-evenly '>
                        <div className=''>
                            <SiJavascript size={60} />
                            <p>JavaScript</p>
                        </div>

                        <div>
                            <FaReact size={60} />
                            <p>React</p>
                        </div>

                        <div>
                            <SiCss3 size={60} />
                            <p>CSS</p>
                        </div>

                        <div>
                            <SiTailwindcss size={60} />
                            <p>Tailwind</p>
                        </div>

                        <div>
                            <SiHtml5 size={60} />
                            <p>HTML5</p>
                        </div>

                        <div>
                            <DiRuby size={60} />
                            <p>Ruby</p>
                        </div>

                        <div>
                            <SiRails size={60} />
                            <p>Ruby on Rails</p>
                        </div>

                        <div>
                            <DiMongodb size={60} />
                            <p>MongoDB</p>
                        </div>
                        <div>
                            <SiPostgresql size={60} />
                            PostgreSQL
                        </div>

                    </div>

                </div>
                <div className='lg:flex lg:flex-col lg:items-center'>
                    <h2 className='text-4xl italic font-bold py-6'>
                        Projects</h2>
                    <hr />
                    <div className='lg:flex lg:flex-row py-8'>
                        <img className='w-5/6 h-20 rounded-2xl' src='https://i.imgur.com/RlnDkjX.png' alt='Project Website' />
                        <img className='w-5/6 h-20 rounded-2xl' src='https://i.imgur.com/yMwHlXT.png' alt='Project Website' />
                        <img className='w-5/6 h-20 rounded-2xl' src='https://i.imgur.com/Xii5sCM.png' alt='Project Website' />
                        <img className='w-5/6 h-20 rounded-2xl' src='https://i.imgur.com/u3wZtbl.png' alt='Project Website' />
                    </div>
                </div>
            </div>
        </div>
    )
}
