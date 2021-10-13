
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
                        <p className='lg:pt-36 lg:font-bold lg:italic lg:leading-9 '>I am a motivated, adaptable and responsible Software Developer proficient at utilizing efficient frameworks that minimize defects and increase productivity.
                        I'm well-organized and capable of working under pressure with a clear, 
                        logical mind with a practical approach to problem-solving and a drive to see things through to completion. 
                        I enjoy working on my own initiative or in a team environment. 
                        In short, I am reliable, trustworthy, hard working and eager to learn and have a genuine interest to carry on with my career.
                        </p>
                    </div>
                </div>
                <Skills />
                <Projects />
            </div>
        </div>
    )
}
