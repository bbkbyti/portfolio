import React from 'react'


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

            <div className='grid grid-cols-3'>
                <div className='flex justify-center flex-col items-center bg-gray-200'>
                    <p className='text-4xl py-3 italic font-bold'>
                        Software Developer</p>
                    <img className='w-1/4' src='https://media-exp1.licdn.com/dms/image/C4E03AQEKYXIdyXITzQ/profile-displayphoto-shrink_100_100/0/1609626216703?e=1635984000&v=beta&t=WUd7Vg-tRq61eXVrBr4WMsQpqlYHqvBXrjl8WZcCw7k' alt='profile picture' />
                    <div className='text-xl font-bold italic py-3'>
                    <p>Babak Bayati</p>
                    <p>bbkbyti@outlook.com</p>
                    <p>(512)-743-6060</p>
                    <p>Austin, TX</p>
                    </div>
                    
                </div>
                <div className='bg-blue-200 py-6'>
                    <h2 className='text-4xl py-3 italic font-bold'>
                        Skills</h2>
                    <hr />
                    <div className='text-xl font-bold italic py-3'>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>React</p>
                        <p>Ruby</p>
                        <p>Ruby on Rails</p>
                        <p>MongoDB</p>
                        <p>Express</p>
                    </div>

                </div>
                <div className='bg-red-100'>
                    <h2 className='text-3xl'>Projects</h2>
                </div>
            </div>
        </div>
    )
}
