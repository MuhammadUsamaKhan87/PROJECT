import React from 'react'
import Card from './Card'

const CardSection = () => {
    return (
        <div className='grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardSection
