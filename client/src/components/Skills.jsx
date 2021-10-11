import React from 'react'
import { FaReact } from "react-icons/fa";
import { DiRuby, DiMongodb, } from "react-icons/di";
import { SiRails, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";
import './Skills.css'

export default function Skills() {
    return (
        <div className='lg:mx-28 bg-gray-300 font-serif '>
            <div className='lg:bg-gray-200 lg:py-12 lg:my-14 lg:rounded-3xl '>
                    <h2 className='lg:text-4xl lg:italic lg:font-bold lg:flex lg:justify-center lg:pb-3 text-2xl font-bold italic pt-3 flex justify-center py-3 '>
                        Skills</h2>
                        <hr />
                    <div className='skills lg:text-xl lg:font-bold lg:italic lg:py-3 lg:flex lg:justify-evenly lg:py-10'>
                        <div>
                            <SiJavascript className='icon' size={60} />
                            <p className='text'>JavaScript</p>
                        </div>

                        <div>
                            <FaReact className='icon' size={60} />
                            <p className='text'>React</p>
                        </div>

                        <div >
                            <SiCss3 className='icon'  size={60} />
                            <p className='text'>CSS</p>
                        </div>
                        <div >
                            <SiHtml5 className='icon' size={60} />
                            <p className='text'>HTML5</p>
                        </div>
                        <div>
                            <DiRuby className='icon' size={60} />
                            <p className='text'>Ruby</p>
                        </div>

                        <div >
                            <SiRails className='icon' size={60} />
                            <p className='text'>Ruby on Rails</p>
                        </div>

                        <div >
                            <DiMongodb className='icon' size={60} />
                            <p className='text'>MongoDB</p>
                        </div>
                        <div >
                            <SiPostgresql className='icon' size={60} />
                            <p className='text'>PostgreSQL</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
