import React from 'react'
import { FaReact } from "react-icons/fa";
import { DiRuby, DiMongodb, } from "react-icons/di";
import { SiRails, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";

export default function Skills() {
    return (
        <div className='lg:mx-28'>
            <div className='lg:bg-gray-200 lg:py-16 lg:my-14 '>
                    <h2 className='lg:text-4xl lg:italic lg:font-bold lg:flex lg:justify-center lg:pb-3 '>
                        Skills</h2>
                    <div className='lg:text-xl lg:font-bold lg:italic lg:py-3 lg:flex lg:justify-evenly lg:py-10'>
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
        </div>
    )
}
