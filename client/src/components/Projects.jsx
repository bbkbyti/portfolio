import React from 'react'

export default function Projects() {
    return (
        <div>
            <div className='lg:flex lg:flex-col lg:items-center'>
                    <h2 className='text-4xl italic font-bold py-6'>
                        Projects</h2>
                    <div className='lg:flex lg:flex-row py-8 justify-evenly'>
                        <img className=' w-2/12 h-64 rounded-2xl' src='https://i.imgur.com/RlnDkjX.png' alt='Project Website' />
                        <img className=' w-2/12 h-64 rounded-2xl' src='https://i.imgur.com/yMwHlXT.png' alt='Project Website' />
                        <img className=' w-2/12 h-64 rounded-2xl' src='https://i.imgur.com/Xii5sCM.png' alt='Project Website' />
                        <img className=' w-2/12 h-64 rounded-2xl' src='https://i.imgur.com/u3wZtbl.png' alt='Project Website' />
                    </div>
                </div>
        </div>
    )
}
