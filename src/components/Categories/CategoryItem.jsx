import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({link,image,title}) {
  return (
    <Link to={link} className='flex flex-col justify-center items-center mb-10'>
        <img src={image} className='w-24 h-24 rounded-full' />
        <h3 className='mt-3 text-white text-sm '>{title}</h3>
    </Link>
  )
}
