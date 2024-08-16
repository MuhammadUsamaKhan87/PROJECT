import React from 'react'
import Image from 'next/image'
import Content from './Content'
import img from '@/components/image/Bitcoin.png'
import img1 from '@/components/image/img.jpg'



const Card = () => {
    return (
        <section className='bg-gray-900 rounded-3xl overflow-hidden shadow-lg transition-transform transform border border-black hover:border-amber-300'>
            <div className=''>
                <Image
                    src={img1}
                    alt="Picture of the author"
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='p-4'>
                <Content />
            </div>
        </section>
    )
}

export default Card
