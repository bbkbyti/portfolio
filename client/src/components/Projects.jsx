import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
        <div id='projects' >
            <div className=' pro lg:flex lg:flex-col lg:items-center lg:bg-gray-200 lg:mx-28 lg:rounded-3xl lg:mb-8 bg-gray-400'>
                <h2 className='lg:text-4xl lg:italic lg:font-bold lg:pt-12 text-2xl font-bold italic font-serif py-3'>
                    Projects</h2>
                <hr />
                <div className='pro lg:grid lg:grid-cols-2 lg:py-8 lg:px-16  '>
                    <div className='lg:mr-10 lg:mt-10 lg:rounded lg:overflow-hidden lg:shadow-lg lg:bg-gray-400 lg:relative  lg:transition lg:duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110 '>
                        <p className=' title lg:text-xl lg:py-1 lg:italic lg:font-bold'
                        >Blue Sky</p>
                        <a href='https://bbkbyti.github.io/Blue-Sky/' target="_blank" rel="noreferrer">
                            <img id='blue-sky' className='img lg:w-full lg:h-32 lg:object-cover' src='https://i.imgur.com/RlnDkjX.png' alt='Project Website' />
                        </a>
                        <p className=' desc lg:px-5 lg:py-3'
                        >A website that provides the weather information of locations. Created with JavaScript - HTML - CSS</p>
                    </div>
                    <div>
                        <div className="lg:ml-10 lg:mt-10 lg:rounded lg:overflow-hidden lg:shadow-lg  lg:bg-gray-400 lg:relative  lg:transition lg:duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                            <p className=' title lg:text-xl lg:py-1 lg:italic lg:font-bold'
                            >Tripopolis</p>
                            <a href='https://tripopolis.netlify.app/' target='_blank' rel='noreferrer'>
                                <img id='trip' className='img lg:w-full lg:h-32 lg:object-cover' src='https://i.imgur.com/yMwHlXT.png' alt='Project Website' />
                            </a>
                            <p className=' desc lg:px-5 lg:py-3'
                            >A website to share vacation experiences with photos. Created with React.Js</p>
                        </div>
                    </div>
                    <div className='lg:mr-10 lg:mt-10 lg:rounded lg:overflow-hidden lg:shadow-lg lg:bg-gray-400 lg:relative  lg:transition lg:duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110 '>
                        <p className='title lg:text-xl lg:py-1 lg:italic lg:font-bold'
                        >Vagary</p>
                        <a href='https://dazzling-ramanujan-14f249.netlify.app/' target='_blank' rel='noreferrer'>
                            <img id='vagary' className=' img lg:w-full lg:h-32 lg:object-cover' src='https://i.imgur.com/Xii5sCM.png' alt='Project Website' />
                        </a>
                        <p className=' desc lg:px-5 lg:py-3'
                        >A website to share vacation experiences with photos and more. Created with Express.Js and React.Js</p>
                    </div>
                    <div className='lg:ml-10 lg:mt-10 lg:rounded lg:overflow-hidden lg:shadow-lg lg:bg-gray-400 lg:relative  lg:transition lg:duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110'>
                        <p className='title lg:text-xl lg:py-1 lg:italic lg:font-bold'
                        >Textbook Rails</p>
                        <a href='https://confident-agnesi-4db176.netlify.app/' target='_blank' rel='noreferrer'>
                            <img id='textbook' className='img lg:w-full lg:h-32 lg:object-cover' src='https://i.imgur.com/u3wZtbl.png' alt='Project Website' />
                        </a>
                        <p className=' desc lg:px-5 lg:py-3'
                        > A college textbook website created with Ruby on Rails and React.Js </p>
                    </div>
                    <div className='lg:mt-10 lg:rounded lg:overflow-hidden lg:shadow-lg lg:bg-gray-400 lg:relative  lg:transition lg:duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110 '>
                        <p className='title lg:text-xl lg:py-1 lg:italic lg:font-bold'
                        >Recipe Factory</p>
                        <a href='https://recipe-factory.vercel.app/' target='_blank' rel='noreferrer'>
                            <img id='recipe' className='img lg:w-full lg:h-32 lg:object-cover' src='https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg' alt='Project Website' />
                        </a>
                        <p className=' desc lg:px-5 lg:py-3'
                        > A recipe website created with Next.Js</p>
                    </div>
                    <div className='lg:ml-10 lg:mt-10 lg:rounded lg:overflow-hidden lg:shadow-lg lg:bg-gray-400 lg:relative  lg:transition lg:duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110 '>
                        <p className='title lg:text-xl lg:py-1 lg:italic lg:font-bold'
                        >Dog Lot</p>
                        <a href='https://dogs-images.vercel.app/' target='_blank' rel='noreferrer'>
                            <img id='dog' className='img lg:w-full lg:h-32 lg:object-cover' src='https://i.imgur.com/AZrhkCf.png' alt='Project Website' />
                        </a>
                        <p className=' desc lg:px-5 lg:py-3'
                        > An application to search for different dog breeds. Created with React.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
