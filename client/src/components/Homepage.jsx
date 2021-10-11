import { Route } from 'react-router-dom';
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';



export default function Homepage() {
    return (
        <div className=' lg:min-h-screen lg:font-serif '>
            <div className=' min-h-screen flex flex-col'>
                <div className='lg:grid lg:grid-cols-2 lg:mt-10' >
                    <Info />
                    <div className='lg:rounded-3xl lg:bg-gray-200 lg:py-2 lg:px-6 lg:mr-28 mx-10 py-4 text-lg font-bold '>
                        <p className='lg:pt-36 lg:font-bold lg:italic lg:leading-9 '>Supportive and communicative Junior Developer with a background in customer service and management.
                            Having moved to three different countries during childhood, Possess exceptional problem-solving skills,
                            a knack for adaptability, and a strong sense of ethics. These traits blend seamlessly with ability to facilitate
                            and continuous need for self-improvement to form the basis of work style.
                        </p>
                    </div>
                </div>
                <Skills />
                <Projects />
            </div>
        </div>
    )
}
