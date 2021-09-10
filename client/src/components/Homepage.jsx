import React from 'react'
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';


export default function Homepage() {
    return (
        <div className=' min-h-screen font-serif '>
            <div className='lg:bg-gray-200 lg:py-12 lg:mb-10'>
                <h1 className='text-xl py-8 mx-64 font-bold italic '>Supportive and communicative Junior Developer with a background in customer service and management.
                    Having moved to three different countries during childhood, Possess exceptional problem-solving skills,
                    a knack for adaptability, and a strong sense of ethics. These traits blend seamlessly with ability to facilitate
                    and continuous need for self-improvement to form the basis of work style.
                </h1>
            </div>
            <div className=' min-h-screen flex flex-col'>
                <Info />
                <Skills />
                <Projects />
            </div>
        </div>
    )
}
