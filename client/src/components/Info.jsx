import React from 'react'

export default function Info() {
    return (
        <div>
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
        </div>
    )
}
