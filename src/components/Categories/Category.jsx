import React from 'react'
import CategoryItem from './CategoryItem'
import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Category() {

    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('https://resturant-menu.onrender.com/api/show/categories');
            return res.data;
        },
    });



    return (
        <div className='mb-10'>
            <h1 className='text-center font-bold text-red-600 mb-10 '>Our Categories</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-3'>
                {data?.map((item) => 
                <Link key={item._id} to={`/category/meals/${item._id}`} state={{ item }}>
                    <CategoryItem
                        title={item.title}
                        image={`https://resturant-menu.onrender.com/uploads/${item.image}`}
                    />
                </Link>)}
            </div>
        </div>
    )
}
