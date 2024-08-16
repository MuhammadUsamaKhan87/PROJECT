import React from 'react'

const MainSection = () => {
    return (
        <div className='flex flex-col  items-left sm:items-center gap-3 '>
            <div>
                <h1 className='text-3xl sm:text-5xl font-bold text-gradient p-4'>Knowledge hub</h1>
            </div>
            <div>
                <ul className='flex flex-col gap-6 sm:gap-9 sm:flex-row justify-left items-left sm:border rounded-full px-5 py-2 sm:bg-gray-900'>
                    <li className='text-xl text-white'>All</li>
                    <li className='text-xl text-white'>Academy</li>
                    <li className='text-xl text-white'>Company</li>
                    <li className='text-xl text-white'>Product</li>
                    <li className='text-xl text-white'> Regulation</li>
                </ul>
            </div>
        </div>
    )
}

export default MainSection
